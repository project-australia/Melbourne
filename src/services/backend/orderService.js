import axios from 'axios'

export const getAllOrders = async () => {
  try {
    const orders = await axios.get('/orders')
    return orders.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const findOrderById = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const updateOrder = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const confirmSellOrder = async (idUser, idOrder, books) => {
  const parsedBooks = books.map(book => {
    return { id: book.id, condition: book.condition, prices: book.prices }
  })
  const body = {
    books: parsedBooks
  }
  try {
    const orders = await axios.post(`/users/${idUser}/orders/${idOrder}/confirmation`, body)
    return orders.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const searchOrders = async (searchParam) => {
  try {
    const users = await axios.get(`/users/search?searchParam=${searchParam}`)
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
