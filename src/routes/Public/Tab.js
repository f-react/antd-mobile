import React from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'

import Tab from '../../components/Public/Tab'

function Index ({ history }) {
  function renderContent (uri) {
    if (history.location.pathname !== uri) history.push(uri)
  }
  return (
    <Tab renderContent={renderContent} selected={history.location.pathname} />
  )
}

Index.propTypes = {
  history: PropTypes.object,
}

export default connect()(Index)
