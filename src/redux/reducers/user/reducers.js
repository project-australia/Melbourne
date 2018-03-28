export function setUser (state, { payload }) {
  return { ...state, profile: payload }
}
