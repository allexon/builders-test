import React from 'react'
import { ContainerPageTemperature } from './styles'
import Temperature from './Temperature'
import { Layout, Loader } from '../../default/index'

const PageCardTemperature = () => {

    return (
        <Layout>
            <Loader />
            <ContainerPageTemperature>
                <Temperature />
            </ContainerPageTemperature>
        </Layout>
    )
}

export default PageCardTemperature