import axios from 'axios'
// import qs from 'query-string'
import { Toast } from 'antd-mobile'

import { getAuthority, setAuthority } from './authority'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  Toast.info(response.statusText, 2, () => {
    if (response.status === 401) {
      setAuthority('')
      window.history.replaceState('', '', '/')
      window.location.reload()
    }
  })

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const fetch = async (url, options) => {
  const { method } = options
  delete options.method
  let response
  switch (method) {
    case 'POST':
      response = await axios.post(url, {}, options)
      break
    case 'GET':
    default:
      response = await axios.get(url, {}, options)
      break
  }
  return response
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request (url, options) {
  if (url !== '/api/user/login') options.headers = { authorization: getAuthority() }

  const response = await fetch(url, options)

  checkStatus(response)
  const data = await response.data

  const ret = {
    ...data,
  }

  return ret
}
