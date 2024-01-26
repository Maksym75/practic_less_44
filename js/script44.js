/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict'

const movieDB = {
	movies: [
		'Логанo',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	],
}
//*. 1
const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list')
// watchedFilms = movieList.querySelectorAll('.promo__interactive-item')

adv.forEach(it => it.remove())
//console.log(adv[1])
console.log(poster)
//*. 2
genre.textContent = 'драма'
// const div = document.createElement('div')
// div.classList.add('promo__genre')
// div.textContent = 'драма'
// genre.replaceWith(div)

//* 3
poster.style.backgroundImage = 'url("/img/bg.jpg")'
//*. 4
// delete the all <li > with className and content!
// watchedFilms.forEach(it => it.remove())
// console.log(watchedFilms)
// * 1)Sorting
movieDB.movies.sort()
// movieDB.movies.sort().reverse()

//* 2) Очищаем список
console.log(movieList.innerHTML)
movieList.innerHTML = ''
console.log(movieList.innerHTML)
// movieDB.movies.forEach((movie, index) => {
// 	// const li = document.createElement('li')
// 	// li.classList.add('promo__interactive-item')
// 	// li.textContent = `${index + 1}. ${movie}`
// 	// movieList.appendChild(li)
// 	// console.log(li)

// 	movieList.innerHTML += `<li class="promo__interactive-item">${
// 		index + 1
// 	}. ${movie}<div class="delete"></div></li>`
// })

function getWatchedFilms(data, movieList) {
	//? 1. ======== variant
	data.movies.forEach((movie, index) => {
		movieList.innerHTML += `<li class="promo__interactive-item">${
			index + 1
		}. ${movie}<div class="delete"></div></li>`
	})

	//? 2. ======== variant

	// for (let i = 0; i < data.movies.length; i++) {
	// 	movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${
	// 		data.movies[i]
	// 	}<div class="delete"></div></li>`
	// }

	//? 3. ======== variant
	// for (let i = 0; i < data.movies.length; i++) {
	// 	const li = document.createElement('li')
	// 	li.classList.add('promo__interactive-item')
	// 	li.textContent = `${i + 1}. ${data.movies[i]}`
	// 	movieList.appendChild(li)
	// }
}
getWatchedFilms(movieDB, movieList)

// let count = 1
// for (let i = 0; i < watchedFilms.length; i++) {
// 	// watchedFilms[i].textContent = `${count + ' ' + movieDB.movies.sort()[i]}`
// 	watchedFilms[i].textContent = count + ' ' + sortedByDecreaseData[i]
// 	count++
// }

// watchedFilms.forEach((val, key) => {
// 	val.textContent = key + 1 + ' ' + movieDB.movies.sort()[key]
// })

// const movieList = document.querySelector('.promo__interactive-list')
// movieList.innerHTML = '' // Очищаем список

// movieDB.movies.sort().forEach((movie, index) => {
// 	const listItem = document.createElement('li')
// 	listItem.classList.add('promo__interactive-item')
// 	listItem.textContent = `${index + 1}. ${movie}`
// 	movieList.appendChild(listItem)
// })
