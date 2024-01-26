/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...',
		],
	}
	//console.log(movieDB.movies.length)
	//*. 1
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		button = addForm.querySelector('button'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]')
	// console.log(movieList)
	//!! intresting -----------------------------------------------------
	adv.forEach(box => {
		if (box.classList.contains('tu')) {
			console.log("box.classList.contains('tu')", box) // 2 pseudo arr img.yyy.tu
		}
		if (box.matches('.tu')) {
			console.log("box.matches('.tu')", box) //2 pseudo arr  img.tu
		}
	})

	//! --------------------------------------------------------------------
	addForm.addEventListener('submit', e => {
		e.preventDefault()
		let newFilm = addInput.value
		const favorite = checkbox.checked
		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 20)} ...`
			}
			movieDB.movies.push(newFilm)
			sortArr(movieDB.movies)
			createMovieList(movieDB.movies, movieList)
		}
		if (favorite) {
			alert(`Добавляем любимый фильм ${newFilm}`)
		}

		e.target.reset()
	})
	// addInput.addEventListener('input', callback)
	// btn.addEventListener('click', onClickBtn)

	const sortArr = arr => {
		arr.sort()
		// arr.sort().reverse()
	}

	const deleteAdv = arr => {
		arr.forEach(it => it.remove())
	}

	const makeChanges = () => {
		genre.textContent = 'драма'
		poster.style.backgroundImage = 'url("/img/bg.jpg")'
	}

	const deleteFromMovieList = (data, deleteBtnClassName, parent) => {
		document.querySelectorAll(deleteBtnClassName).forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove()
				data.splice(i, 1)
				// for rerender with proper numbers
				createMovieList(data, parent)
			})
		})
	}

	function createMovieList(films, parentUl) {
		parentUl.innerHTML = ''
		sortArr(films)
		films.forEach((movie, index) => {
			parentUl.innerHTML += `<li class="promo__interactive-item">${
				index + 1
			}. ${movie}<div class="delete"></div></li>`
		})
		deleteFromMovieList(movieDB.movies, '.delete', parentUl)
		// document.querySelectorAll('.delete').forEach((btn, index) => {
		// 	btn.addEventListener('click', () => {
		// 		btn.parentElement.remove()
		// 		movieDB.movies.splice(index, 1)
		//
		//		createMovieList(movieDB.movies, movieList)
		// 	})
		// })
	}
	// sortArr(movieDB.movies)
	deleteAdv(adv)
	makeChanges()
	createMovieList(movieDB.movies, movieList)
})
