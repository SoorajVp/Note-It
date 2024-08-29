import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import store from './state/store'


export const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    // [{ font: [] }],
    [{ size: [] }],

    [
      { list: "ordered" }, { list: "bullet" },
      // { indent: "-1" }, { indent: "+1" },
    ],
    ["bold", "italic", "underline", "blockquote", "strike"],
    ["link", "video"],

  ]
}

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
