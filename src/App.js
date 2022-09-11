import React from 'react'
import Routes from './Routes'
import { ThemeProvider } from 'styled-components'
import ResetCSS from './assets/css/reset-css'
import { themeDefault } from './assets/themes/theme-default'
import { Message, Modal } from './default/index'
import { ConsumerLatLon, ConsumerAddress, ConsumerTemperature } from './consumuer/index'

let App = () => {
    
    return (
        <ThemeProvider theme={themeDefault}>
            <ConsumerLatLon />
            <ConsumerAddress />
            <ConsumerTemperature />
            <ResetCSS />
            <Modal />
            <Message />
            <Routes />
        </ThemeProvider>
    )
}

export default App