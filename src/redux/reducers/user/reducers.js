export function getUser(state, { payload }) {
  return { ...state, user: payload }
}

export function setUser(state, { payload }) {
  return { ...state, user: payload }
}
