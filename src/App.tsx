import { RouterProvider } from "react-router-dom"
import { CircularProgress, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import { store } from './redux/store'
import { routers } from './routes/routers'
import { theme } from './themes/theme'

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider
          router={routers}
          fallbackElement={<CircularProgress />} />
        </ThemeProvider>
    </Provider>
  )
}

export default App
