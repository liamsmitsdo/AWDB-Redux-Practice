import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {legacy_createStore} from 'redux'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
