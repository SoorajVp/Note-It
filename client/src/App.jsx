import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRouter from './routes/AppRouter'
import store from './state/store'

function App() {

  return (
    <BrowserRouter>
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
