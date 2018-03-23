import axios from 'axios'

export const getAllUsers = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const updateUser = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const deteleUser = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const findUserById = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const searchUsers = async () => {
  try {
    const users = await axios.get('/posts')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
