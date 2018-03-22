import axios from 'axios'

export const getAllUsers = async () => {
  const users = await axios.get('/posts')
  return users.data
}
