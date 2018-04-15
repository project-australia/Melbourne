import axios from 'axios'

export const getAllBooks = async (activePage = 1) => {
  try {
    const books = await axios.get(`/books?activePage=${activePage}`)
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

export const findBooksById = async (BooksId) => {
  try {
    const books = await axios.post('/books/searchbyids', BooksId)
    return books.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const updateBook = async (book) => {
  const { id, priceBuy, priceSell, priceRent, status, about, condition, featured } = book
  const body = {
    status,
    about,
    condition,
    featured,
    prices: {
      buy: priceBuy,
      rent: priceRent,
      sell: priceSell
    }
  }
  try {
    const users = await axios.put(`/books/${id}`, body)
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const searchBooks = async (searchParam) => {
  try {
    const books = await axios.get(`/books/searchPaginated?search=${searchParam}`)
    return books.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
