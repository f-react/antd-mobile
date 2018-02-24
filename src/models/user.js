// import dva from 'dva';
import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { routerRedux } from 'dva/router'

import { pageModel } from './common'
import { query, login, logout } from '../services/user'
import { setAuthority } from '../utils/authority'

export default modelExtend(pageModel, {
  namespace: 'user',
  state: {
  },
  reducers: {
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/user') {
          const payload = queryString.parse(location.search) || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },
  effects: {
    * login ({ payload = {} }, { call, put }) {
      const { data, code } = yield call(login, payload)
      if (code === 200) {
        setAuthority(data.token)
        yield put(routerRedux.replace('/'))
      }
    },
    * query ({ payload = {} }, { call, put }) {
      const { data } = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data,
          },
        })
      }
    },
    * logout ({ payload = {} }, { call, put }) {
      const { code } = yield call(logout, payload)
      if (code === 200) {
        setAuthority('')
        yield put(routerRedux.replace('/login'))
      }
    },
  },
})
