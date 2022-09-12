import React, {useEffect} from 'react'
import { CardTemperature } from '../../components/index'
import { storeModal } from '../../store/index'
import { Layout, Loader } from '../../default/index'

const Home = () => {

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