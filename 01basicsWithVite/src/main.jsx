//removed few default code to make a new beginning

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = React.createElement (
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google!'
)
createRoot(document.getElementById('root')).render(
  // reactElement
  <App />
)
