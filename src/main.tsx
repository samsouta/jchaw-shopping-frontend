import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'
import './App.css'
import { MantineProvider } from '@mantine/core';
import { StateContextProvider } from './context/StateContext.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
    <StateContextProvider>
      <BrowserRouter>
        <MantineProvider>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </MantineProvider>
      </BrowserRouter>
    </StateContextProvider>
    </Provider>
  </StrictMode>,
)
