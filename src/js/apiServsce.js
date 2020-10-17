export default {
  baseUrl: `https://pixabay.com/api/docs/`,
  apiKey: `18650825-85dd9ce829ef20624228a2c85`,
  qury: ``,
  page: 1,
  per_page: 12,
  url: `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.qury}&${this.page}&per_page=${this.per_page}&key=${this.apiKey}`
}