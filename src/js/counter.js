import refs from './imageRefs'

export default {
  count: 3,

  decrements(){
    if(this.count > 3){
      this.count -= 3
      refs.countSpan.textContent = this.count
      return('')
    }
  },
  increments(){
    if(this.count < 198){
      this.count += 3
      refs.countSpan.textContent = this.count
      return('')
    }
  }
}

