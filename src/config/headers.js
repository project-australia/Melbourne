function getAuthToken () {
  return localStorage.getItem('user-pass')
}

export function setTokenAuth (token) {
  localStorage.setItem('user-pass', token)
}

export function authHeader (method) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${getAuthToken()}`
    }
  }
  return options
}
