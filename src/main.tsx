import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'
import './App.css'
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
