export function setLoggedStatus (state, { payload }) {
  return { ...state, logged: payload }
}

export function setUserCredentials (state, { payload }) {
  return { ...state, credentials: payload }
}

export function setResetPassword (state, { payload }) {
  return { ...state, resetPassword: payload }
}
