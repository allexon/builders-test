import React, { useEffect } from 'react'
import { Main, Container, Text } from './styles'
import { storeMessage } from '../../store/index'

const Message = (props) => {

    const message = storeMessage(state => state)
        
    useEffect(() => {
        message.fnOnChangeMessage({field:'fnSuccess', value:fnSuccess})
        message.fnOnChangeMessage({field:'fnError', value:fnError})
        message.fnOnChangeMessage({field:'fnInfo', value:fnInfo})        
    }, [])

    const fnSuccess = (param) => {
        message.fnOnChangeMessage({field:'boolVisible', value:true})
        message.fnOnChangeMessage({field:'boolIsLoading', value:true})
        message.fnOnChangeMessage({field:'cssClassName', value:'success-up'})
        message.fnOnChangeMessage({field:'txtMessage', value:param})

        let _timer1 = setTimeout(() => {
            message.fnOnChangeMessage({field:'cssClassName', value:'success-down'})            
        }, 2000)

        let _timer2 = setTimeout(() => {
            clearTimeout(_timer1)
            clearTimeout(_timer2)
            message.fnOnChangeMessage({field:'boolIsLoading', value:false})
            message.fnOnChangeMessage({field:'boolVisible', value:false})
            message.fnOnChangeMessage({field:'txtMessage', value:''})
        }, 3000)
    }

    const fnError = (param) => {
        message.fnOnChangeMessage({field:'boolVisible', value:true})
        message.fnOnChangeMessage({field:'boolIsLoading', value:true})
        message.fnOnChangeMessage({field:'cssClassName', value:'error-up'})
        message.fnOnChangeMessage({field:'txtMessage', value:param})

        let _timer1 = setTimeout(() => {
            message.fnOnChangeMessage({field:'cssClassName', value:'error-down'})
        }, 2000)

        let _timer2 = setTimeout(() => {
            clearTimeout(_timer1)
            clearTimeout(_timer2)
            message.fnOnChangeMessage({field:'boolIsLoading', value:false})
            message.fnOnChangeMessage({field:'boolVisible', value:false})
            message.fnOnChangeMessage({field:'txtMessage', value:param})
        }, 3000)
    }

    const fnInfo = (param) => {
        message.fnOnChangeMessage({field:'boolVisible', value:true})
        message.fnOnChangeMessage({field:'boolIsLoading', value:true})
        message.fnOnChangeMessage({field:'cssClassName', value:'info-up'})
        message.fnOnChangeMessage({field:'txtMessage', value:param})

        let _timer1 = setTimeout(() => {
            message.fnOnChangeMessage({field:'cssClassName', value: 'info-down'})            
        }, 2000)

        let _timer2 = setTimeout(() => {
            clearTimeout(_timer1)
            clearTimeout(_timer2)
            message.fnOnChangeMessage({field:'boolIsLoading', value:false})
            message.fnOnChangeMessage({field:'boolVisible', value:false})
            message.fnOnChangeMessage({field:'txtMessage', value: param})
        }, 3000)
    }

    return (
        message.boolVisible &&
        <Main className={message.cssClassName}>
            <Container>
                <Text>{message.txtMessage}</Text>
            </Container>
        </Main>
    )
}

export default Message