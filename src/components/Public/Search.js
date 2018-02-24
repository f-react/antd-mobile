import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  componentWillMount () {
    const { value } = this.props
    value && this.setState({ value: this.props.value })
  }

  onChange = (value) => {
    const { onChange } = this.props
    if (onChange) value = this.props.onChange(value)

    this.setState({ value })
  }

  render () {
    const { search, placeholder, maxLength } = this.props
    return (
      <SearchBar
        value={this.state.value}
        placeholder={placeholder || '搜索'}
        onSubmit={search}
        maxLength={maxLength}
        // onClear={value => console.log(value, 'onClear')}
        // onFocus={() => console.log('onFocus')}
        // onBlur={() => console.log('onBlur')}
        onCancel={() => this.setState({ value: '' })}
        onChange={this.onChange}
      />
    )
  }
}

Search.propTypes = {
  search: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
}

export default Search
