import { LOGIN, GOOGLE_DATA } from './types.js'

export const loginStatus = (bool) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: bool
    })
  }
}

export const setData = (data) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLE_DATA,
      payload: data
    })
  }
}
