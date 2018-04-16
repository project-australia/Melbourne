import axios from 'axios'

export const getAllOrders = async (activepage = 1) => {
  try {
    const orders = await axios.get(`/orders?activepage=${activepage}`)
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

export const updateOrder = async (order) => {
  const { id, transactionId, status } = order
  const body = {
    transactionId,
    status
  }
  try {
    const orders = await axios.put(`/orders/${id}`, body)
    console.log('order updated', orders.data)
    return orders.data
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
    const orders = await axios.get(`/orders/search?searchParam=${searchParam}`)
    console.log('search result', orders.data)
    return orders.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
