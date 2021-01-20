import UserTypes from '../types/UserTypes'

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case UserTypes.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))

      return { ...state, authData: action.data, loading: false, errors: null }
    case UserTypes.LOGOUT:
      localStorage.clear()

      return { ...state, authData: null, loading: false, errors: null }
    default:
      return state
  }
}

export default authReducer
