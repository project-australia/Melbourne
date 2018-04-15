import axios from 'axios'

// axios.defaults.baseURL = 'https://project-australia.herokuapp.com'
// axios.defaults.baseURL = 'https://ballard-books-production.herokuapp.com'
axios.defaults.baseURL = 'http://localhost:4001'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('c')
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
