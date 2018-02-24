import dva from 'dva'

import './index.css'
import * as models from './models/index'

// 1. Initialize
const app = dva({
  onError: (e, dispatch) => { // model里面effects 和 subscriptions 的抛错
    console.log('model error ', e.message)
    console.log('dispatch error', dispatch)
  },
})

// 2. Plugins
// app.use({})

// 3. Model
Object.keys(models).map(model => app.model(models[model]))

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
