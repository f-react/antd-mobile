import React from 'react'

import Tab from './Tab'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: false,
      fullScreen: true,
    }
  }

  renderContent (pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{
          display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9',
        }}
          onClick={(e) => {
            e.preventDefault()
            this.setState({
              hidden: !this.state.hidden,
            })
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.setState({
              fullScreen: !this.state.fullScreen,
            })
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    )
  }

  render () {
    return (
      <Tab renderContent={this.renderContent} />
    )
  }
}

export default Index
