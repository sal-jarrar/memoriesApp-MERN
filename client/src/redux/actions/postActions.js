import PostTypes from '../types/postTypes'

import * as api from '../../api'

export const getPosts = () => async (dispatch) => {
  const { data } = await api.fetchPosts()
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

export const deletePost = (id) => async (dispatch) => {
  await api.deletePost(id)
  try {
    dispatch({
      type: PostTypes.DELETE_POST,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  console.log(user)

  try {
    const { data } = await api.likePost(id, user?.token)

    dispatch({ type: PostTypes.LIKE_UPDATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}
