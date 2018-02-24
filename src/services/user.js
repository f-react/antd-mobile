import request from '../utils/request'

export async function login (params) {
  return request('/api/user/login', {
    method: 'POST',
    body: params,
  })
}

export async function logout (params) {
  return request('/api/user/logout', {
    method: 'POST',
    body: params,
  })
}

export async function query (params) {
  return request('/api/users', {
    method: 'GET',
    body: params,
  })
}
