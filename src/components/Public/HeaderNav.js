import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import PropTypes from 'prop-types'

const styles = {
  arrowAlign: {
    display: 'flex',
    alignItems: 'center',
  },
}

class HeaderNav extends React.Component {
  render () {
    const {
      title, left, right, back, go, hiddenRight,
    } = this.props
    return (
      <NavBar
        mode="light"
        icon={<span style={{ ...styles.arrowAlign }}><Icon type="left" /><font>{left || '上一项'}</font></span>}
        onLeftClick={back}
        rightContent={!hiddenRight && [
          <span key="0" style={{ ...styles.arrowAlign }} onClick={go}>{right || '下一项'}<Icon type="right" /></span>,
        ]}
      >{title}</NavBar>
    )
  }
}

HeaderNav.propTypes = {
  title: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  hiddenRight: PropTypes.bool,
  back: PropTypes.func,
  go: PropTypes.func,
}
export default HeaderNav
