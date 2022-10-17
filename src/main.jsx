import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 新版本严格模式下会effect hook 会执行两次
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
