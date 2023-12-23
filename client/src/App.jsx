import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import store from './state/store'

function App() {

  return (
    <>
      <Toaster
        position="top-center" reverseOrder={false}
        toastOptions={{
          className: 'text-sm',
          style: { border: '1px solid #5c33bd' },
        }} />

      <BrowserRouter>
        <Provider store={store} >
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
