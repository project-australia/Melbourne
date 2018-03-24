import axios from 'axios'

export const getAllUsers = async () => {
  try {
    const users = await axios.get('/users')
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const updateUser = async (userToUpdate) => {
  const { id, city, state, role, telephone, street, zipCode, club, requestStatus, ballance, referredBy, paypalAccount } = userToUpdate
  const body = {
    club,
    role,
    telephone,
    referredBy,
    address: {
      zipCode,
      city,
      state,
      street
    },
    wallet: {
      status: requestStatus,
      ballance,
      paypalAccount
    }
  }
  try {
    const user = await axios.put(`/users/${id}/profile`, body)
    return user.data
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
