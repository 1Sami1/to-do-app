import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'
import { ChakraProvider, ColorModeScript, extendTheme, useColorModeValue } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
});


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ChakraProvider theme={theme} >
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>
)
