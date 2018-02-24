import { Toast } from 'antd-mobile'

export const formSubmit = (props) => {
  props.form.validateFields({ force: true }, (error, values) => {
    if (!error) {
      props.onOk(values)
    } else {
      console.log('validate edit error', error)
      Toast.info(error[Object.keys(error)[0]].errors[0].message)
    }
  })
}
