import React from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'

const styles = {
  iconSize: {
    fontSize: '1.5rem',
  },
}

class Tab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { renderContent, selected } = this.props
    return (
      <div style={{
        position: 'fixed', width: '100%', bottom: 0,
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="/"
            icon={<i className="icon-list-ul" style={styles.iconSize} />}
            selectedIcon={<i className="icon-list-ul" style={styles.iconSize} />}
            selected={selected === '/'}
            onPress={() => renderContent('/')}
            data-seed="/"
          />
          <TabBar.Item
            title="个人中心"
            key="user"
            icon={<i className="icon-user" style={styles.iconSize} />}
            selectedIcon={<i className="icon-user" style={styles.iconSize} />}
            selected={selected === '/user'}
            onPress={() => renderContent('/user')}
            data-seed="user"
          />
        </TabBar>
      </div>
    )
  }
}

Tab.propTypes = {
  renderContent: PropTypes.func,
  selected: PropTypes.string,
}

export default Tab
