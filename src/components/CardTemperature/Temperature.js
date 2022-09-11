import React from 'react'
import { ContainerCardTemperature, Box, Content, Label, Value, Tag, Strong, BoxTop, Icon } from './styles'
import { storeTemperature, storeAddress, storeLatLon } from '../../store/index'
import { SvgT1, SvgT2, SvgT3 } from '../../assets/svgs/index'
import { LinkButton } from '../../default/index'

const Temperature = (props) => {

    const temperature = storeTemperature(state => state)
    const address = storeAddress(state => state)
    const latLon = storeLatLon(state => state)

    const fnOptionIcon = (temp) => {

        // Uma bricadeira, com temp
        let _temp = temp
        
        if(_temp > 0 && _temp < 10) {
            return <SvgT3 />
        }

        if(_temp > 10 && _temp < 20) {
            return <SvgT1 />
        }

        if(_temp > 20 && _temp < 100) {
            return <SvgT2 />
        }
    }

    return (
        <ContainerCardTemperature>            
            <Box flex='2'>
                <BoxTop>PREVISÃO DO TEMPO</BoxTop>
            </Box>

            <Box flex='8'>
                <div style={{width:'100%', display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    {fnOptionIcon(parseInt(temperature.data?.current?.temp))}
                </div>
            </Box>

            <Box flex='7'>
                <Content>
                    <Strong>
                        {temperature.data?.current?.temp? `${parseInt(temperature.data?.current?.temp)}ºC` : ` `}
                        <Tag>{address.data?.address?.city}{`, `}{address.data?.address?.state}</Tag>
                    </Strong>
                </Content>
            </Box>

            <Box>
                <Content>
                    <Icon><SvgT3 /></Icon>
                    <Label width='80px'>Latitude:</Label>
                    <Value>{latLon.data?.coords?.latitude}</Value>
                    <Label width='80px'>Longitude:</Label>
                    <Value>{latLon.data?.coords?.latitude}</Value>
                    <div style={{position:'absolute', bottom:'40px', right:'20px'}}>
                        <LinkButton href='page-card-temperature'></LinkButton>
                    </div>
                </Content>
            </Box>

            

      </ContainerCardTemperature>
      
    )
}

export default Temperature