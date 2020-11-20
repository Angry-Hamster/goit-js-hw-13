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
let page = 1

refs.ul.insertAdjacentElement('afterend', loadMoreBtn)
refs.input.addEventListener('input', debounce((event)=>{
  refs.ul.innerHTML = ''
  let perPage = Number(refs.countSpan.textContent)
  page = 1
  apiServsce.getImages(event.target.value, perPage, page)
  .then(data => {insertElements(data.hits, imgTemplate, refs.ul)})
  query = event.target.value
  refs.input.value = ''
  loadMoreBtn.classList.remove('isHiden')
  loadMoreBtn.classList.add('loadMoreBtn')



  setTimeout(() =>{
    var elmnt = document.getElementById("nav");
    elmnt.scrollIntoView({block: "center", behavior: "smooth"})
  }, 4000)
}, 1000))


loadMoreBtn.addEventListener('click', () => {
  let perPage = Number(refs.countSpan.textContent)
  page++
  apiServsce.getImages(query, perPage, page)
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
