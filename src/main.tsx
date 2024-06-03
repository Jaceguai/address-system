import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routers/routers.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { getApplicationTheme } from './theme/applicationTheme/applicationTheme.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
