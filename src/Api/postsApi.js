import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

export const getPosts = async () => {
  return await axios.get(baseURL)
}

export const getComments = async (postId) => {
  return await axios.get(`${baseURL}/${postId}/comments`)
}
