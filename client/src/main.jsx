import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './ErrorBoundary.jsx';
import { Authprovider } from './components/Store/Auth.jsx';
import { FilterContextProvider } from './components/Store/filterContext.jsx';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ErrorBoundary>
    <Authprovider>
      <FilterContextProvider>
    <App />
    <ToastContainer/>
    </FilterContextProvider>
    </Authprovider>
  </ErrorBoundary> 
  // </StrictMode>,
)
