export function getAuthority () {
  return localStorage.getItem('edc-authority')
}

export function setAuthority (authority) {
  return localStorage.setItem('edc-authority', authority)
}

export const referrer = (value) => {
  const name = 'referrer'
  if (value && value.indexOf('edit') === -1) {
    localStorage.setItem(name, value)
  }
  return localStorage.getItem(name)
}
