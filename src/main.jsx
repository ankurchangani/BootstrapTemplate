import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from './Container/container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Container/>
  </StrictMode>,
)
