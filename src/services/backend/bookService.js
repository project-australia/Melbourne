import axios from 'axios'

export const getAllBooks = async () => {
  try {
    const books = await axios.get('/books')
    return books.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const findBookById = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const updateBook = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const searchBooks = async (searchParam) => {
  try {
    const users = await axios.get(`/users/search?searchParam=${searchParam}`)
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
