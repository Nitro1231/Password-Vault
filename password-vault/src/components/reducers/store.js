import { LOGIN, GOOGLE_DATA } from './types.js'

const initialState = {
  login: false,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload
      }
    case GOOGLE_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
