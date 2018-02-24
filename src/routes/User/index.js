import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { NavBar } from 'antd-mobile'

import Tab from '../Public/Tab'
// import styles from './Index.less'

const Index = ({
  dispatch, history,
}) => {
  const logout = () => {
    dispatch({
      type: 'user/logout',
    })
  }

  return (
    <DocumentTitle title="个人中心">
      <div>
        <Tab history={history} />
        <NavBar
          mode="light"
          style={{ bottom: '1px solid #ddd' }}
          rightContent={[
            <span key="0" style={{ color: '#000' }} onClick={logout}>退出</span>,
          ]}
        >个人中心</NavBar>
      </div>
    </DocumentTitle>
  )
}

Index.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

function mapStateToProps (state) {
  return { ...state.statistics }
}

export default connect(mapStateToProps)(Index)
