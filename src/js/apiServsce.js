import { data } from "autoprefixer"

export default {
  baseUrl: `https://pixabay.com/api/`,
  imageType: `photo`,
  orientation: `horizontal`,
  page: 1,
  key: `18650825-85dd9ce829ef20624228a2c85`,

  getImages(query, perPage){
    let params = `?image_type=${this.imageType}&orientation=${this.orientation}&q=${query}&${this.page}&per_page=${perPage}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`;


    return fetch(url)
    .then(response => response.json())
  }
}