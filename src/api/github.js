import axios from 'axios'

const host = 'https://api.github.com'

const buildURL = url => `${host}/${url}`
const buildAuth = (token, headers) => {
  if (!token) return headers
  return { Authorization: `Bearer ${token}`, ...headers }
}
const buildRequest = {
  get: (url, token = null, params, headers = {}) => axios.request({
    method: 'get',
    url: buildURL(url),
    params,
    headers: buildAuth(token, headers)
  }),
  post: (url, token = null, data, headers = {}) => axios.request({
    method: 'post',
    url: buildURL(url),
    data,
    headers: buildAuth(token, headers)
  })
}

const api = {
  getGithubUser: ({ username }) => buildRequest.get(`users/${username}`)
}

export default api
