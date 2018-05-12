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
  const { id, city, state, role, telephone, street, zipCode, club, requestStatus, balance, referredBy, paypalAccount, venmoAccount } = userToUpdate
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
      balance,
      paypalAccount,
      venmoAccount
    }
  }
  try {
    const user = await axios.put(`/users/${id}/profile`, body)
    return user.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const findUserById = async (userId) => {
  try {
    const user = await axios.get(`/users/${userId}/profile`)
    return user.data
  } catch (err) {
    console.log('err user', err.message)
  }
}

export const searchUsers = async (searchParam) => {
  try {
    const users = await axios.get(`/users/search?searchParam=${searchParam}`)
    return users.data
  } catch (err) {
    console.log('err user', err.message)
  }
}
