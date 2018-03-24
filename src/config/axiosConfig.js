import axios from 'axios'

axios.defaults.baseURL = 'https://project-australia.herokuapp.com'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('c')
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

console.log('quanto roda isso')
