import React from 'react'
import { ContainerCardTemperature, Box, Content, Label, Value, Tag, Strong, BoxTop, Icon } from './styles'
import { storeTemperature, storeAddress, storeLatLon, storeUrls } from '../../store/index'
import { Svg1, Svg2, Svg3 } from '../../assets/svgs/index'
import { LinkButton } from '../../default/index'

const Temperature = (props) => {

    const temperature = storeTemperature(state => state)
    const address = storeAddress(state => state)
    const latLon = storeLatLon(state => state)
    const urls = storeUrls(state => state)
    
    const fnOptionIcon = (temp) => {

        // Uma bricadeira, com temp
        let _temp = temp
        
        if(_temp > 0 && _temp < 10) {
            return <Svg3 />
        }

        if(_temp > 10 && _temp < 20) {
            return <Svg1 />
        }

        if(_temp > 20 && _temp < 100) {
            return <Svg2 />
        }
    }

    const fnUpdateUrl = () => {
        urls.activeUrl == 'page-card-temperature'? urls.fnOnChangeUrls({field:'', value:'/'}) : urls.fnOnChangeUrls({field:'', value:'page-card-temperature'})
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
                    <Icon><Svg3 /></Icon>
                    <Label width='80px'>Latitude:</Label>
                    <Value>{latLon.data?.coords?.latitude}</Value>
                    <Label width='80px'>Longitude:</Label>
                    <Value>{latLon.data?.coords?.latitude}</Value>
                    <div style={{position:'absolute', bottom:'40px', right:'20px'}} onClick={() => {fnUpdateUrl()}}>
                        <LinkButton href={urls.activeUrl}></LinkButton>
                    </div>
                </Content>
            </Box>

            

      </ContainerCardTemperature>
      
    )
}

export default Temperature