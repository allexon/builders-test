import React, { useEffect } from 'react'
import { storeLatLon } from '../store/index'

const ConsumerLatLot = () => {

    const latlon = storeLatLon(state => state)
        
    useEffect(() => {
        fnGetLatLon()
    }, [])

    const fnGetLatLon = () => {    
        let options = {enableHighAccuracy:true, maximumAge:3, timeout:3000}
        const fnSuccess = (pos) => {
            latlon.fnOnChangeLatLon({field:'data', value: pos}) 
        }
      
        const fnError = (err) => {
            console.error('Error ->', err)
            // return  'Não possivel buscar sua localização!'
        }                
        navigator.geolocation.getCurrentPosition(fnSuccess, fnError, options)
    }

    return (<></>)
}

export default ConsumerLatLot