import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import { NavBar, PullToRefresh, Grid } from 'antd-mobile'
import { connect } from 'dva'

import Tab from './Public/Tab'
// import styles from './Index.less'

const Index = ({
  dispatch, history, refreshing, list: array, pagination,
}) => {
  const loadMore = () => {
    console.log('pa', pagination)
    refreshing = true
    if (pagination.hasNextPage) {
      dispatch({
        type: 'user/query',
      })
    }
    setTimeout(() => {
      refreshing = false
    }, 1000)
  }
  return (
    <DocumentTitle title="首页">
      <div>
        <NavBar mode="light">首页</NavBar>
        <div>
          <PullToRefresh
            style={{
              height: document.documentElement.clientHeight - 45 - 50,
              overflow: 'auto',
            }}
            indicator={{ deactivate: '上拉可以刷新' }}
            direction="up"
            refreshing={refreshing}
            onRefresh={loadMore}
          >
            <Grid data={array}
              columnNum={3}
              itemStyle={{ height: '2rem', lineHeight: '2rem' }}
              renderItem={dataItem => dataItem.text}
            />
          </PullToRefresh>
        </div>
        <Tab history={history} />
      </div>
    </DocumentTitle>
  )
}

Index.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  list: PropTypes.array,
  refreshing: PropTypes.bool,
  pagination: PropTypes.object,
}

function mapStateToProps (state) {
  return { ...state.user }
}

export default connect(mapStateToProps)(Index)
