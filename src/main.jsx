import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#AE0000',
            borderRadius: 6
          },
          components: {
            Segmented: {
              itemSelectedBg: '#DEDEFA',
              itemSelectedColor: '#4543AE',
              itemColor: '#667085',
              algorithm: true,
              controlHeight: 40
            },
            DatePicker: {
              controlHeight: 40
            },
            Button: {
              controlHeight: 40
            }
          }
        }}
      >

        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
