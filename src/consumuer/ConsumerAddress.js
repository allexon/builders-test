import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { storeAddress, storeUrls, storeLatLon, storeMessage } from '../store/index'

const ConsumerAddress = () => {

    const address = storeAddress(state => state)
    const latLon = storeLatLon(state => state)
    const urls = storeUrls(state => state)
    const message = storeMessage(state => state)
        
    useEffect(() => {
        latLon.data &&
        fnGetAddress()
    }, [latLon.data])

    const fnGetAddress = async () => {
        let _result = null

        let config = {
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, allowedHeaders: "*"}
            
        let _url = `${urls.urlAddress}lat=${latLon.data?.coords.latitude}&lon=${latLon.data?.coords.longitude}`
                                     
        try {
            _result = await axios.get(_url, config)
            if(_result.status == 200) {
                address.fnOnChangeAddress({field:'data', value: _result.data})
             } else {
                message.fnError('Não foi possivel buscar endereço!')
            }
        } catch (error) {
            if(_result.status != 200) {
                console.log('--- Error -->', error)
            }
        }
    }

    return (<></>)
}

export default ConsumerAddress