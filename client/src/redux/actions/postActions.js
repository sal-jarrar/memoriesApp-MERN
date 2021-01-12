import PostTypes from '../types/postTypes'
import * as api from '../../api'

export const getPosts = () => async (dispatch) => {
  const { data } = await api.fetchPost()
  try {
    dispatch({
      type: PostTypes.FETCH_ALL,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post)
  try {
    dispatch({
      type: PostTypes.CREATE_POST,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}
export const updatePost = (id, post) => async (dispatch) => {
  const { data } = await api.updatePost(id, post)
  try {
    dispatch({
      type: PostTypes.UPDATE_POST,
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}
