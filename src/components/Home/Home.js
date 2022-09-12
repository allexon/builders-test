import React, {useEffect} from 'react'
import { CardTemperature } from '../../components/index'
import { storeAddress, storeTemperature, storeLatLon, storeModal } from '../../store/index'
import { Layout, Loader } from '../../default/index'

const Home = () => {

    const address = storeAddress(state => state)
    const temperature = storeTemperature(state => state)
    const latLon = storeLatLon(state => state)
    const modal = storeModal(state => state)
        
    useEffect(() => {
        modal.fnOpen &&
        fnOpenModal()
    }, [modal.fnOpen])

    const fnOpenModal = () => {
        
        setTimeout(() => {
            modal.fnOpen(<CardTemperature />)
        }, 3000)
    }

    return (
        <Layout>
            <Loader />
        </Layout>
    )
}

export default Home