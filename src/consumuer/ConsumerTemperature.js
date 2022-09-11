import React, { useState, useEffect } from 'react'
import { storeTemperature, storeUrls, storeLatLon } from '../store/index'

const ConsumerTemperature = () => {

    const temperature = storeTemperature(state => state)
    const latLon = storeLatLon(state => state)
    const urls = storeUrls(state => state)

    const [apiKey, setApiKey] = useState(process.env.PREACT_APP_OPEN_WEATHER_KEY)
    
    useEffect(() => {
        latLon.data &&
        fnTemperature()
    }, [latLon.data])

    const fnTemperature = async () => {        
        let _url = `${urls.urlTemperature}lat=${latLon.data?.coords.latitude}&lon=${latLon.data?.coords.longitude}&appid=${apiKey}&units=metric&lang=pt-br`

        fetch(_url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText)
                return resp.json()
                })
            .then((data) => {
                temperature.fnOnChangeTemperature({field:'data', value: data})
            })
            .catch(console.err)
    }
    return (<></>)
}

export default ConsumerTemperature