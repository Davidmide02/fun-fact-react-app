import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Content from './components/body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    

  </React.StrictMode>
)
