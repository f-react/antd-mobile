import modelExtend from 'dva-model-extend'

export const model = {
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

export const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      currentPage: 1,
      total: 0,
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      let {
        list, total, currentPage, hasNextPage,
      } = payload
      currentPage += 1
      return {
        ...state,
        list,
        pagination: {
          total,
          currentPage,
          hasNextPage,
          // ...state.pagination,
          // ...pagination,
        },
      }
    },
  },
})

// module.exports = {
//   model,
//   pageModel,
// }
