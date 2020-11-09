import css from "./css/style.css";
import refs from './js/imageRefs.js'
import apiServsce from './js/apiServsce.js'
import imgTemplate from './temaplate/imageItem.hbs'
import counter from './js/counter.js'
import debounce from 'lodash.debounce'

const loadMoreBtn = document.createElement('button')
loadMoreBtn.textContent = 'load mora...'
loadMoreBtn.classList.add('isHiden')

let query
let countImage = 0
refs.ul.insertAdjacentElement('afterend', loadMoreBtn)
refs.input.addEventListener('input', debounce((event)=>{
  refs.ul.innerHTML = ''
  let perPage = refs.countSpan.textContent
  countImage = Number(perPage)
  apiServsce.getImages(event.target.value, perPage)
  .then(data => {insertElements(data.hits, imgTemplate, refs.ul)})
  query = event.target.value
  refs.input.value = ''
  loadMoreBtn.classList.remove('isHiden')
  loadMoreBtn.classList.add('loadMoreBtn')
}, 1000))

loadMoreBtn.addEventListener('click', () => {
  refs.ul.innerHTML = ''
  apiServsce.getImages(query, countImage)
  .then(data => {insertElements(data.hits, imgTemplate, refs.ul)})
})

function insertElements(data, template, place) {
  const element = template(data)
  place.insertAdjacentHTML('beforeend', element)
}

refs.decrementBtn.addEventListener('click', () => {
  counter.decrements()
})
refs.incrementBtn.addEventListener('click', () => {
  counter.increments()
})
