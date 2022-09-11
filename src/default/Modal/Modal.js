import React, { useEffect } from 'react'
import { Main, Container, ButtonCloseModal } from './styles'
import { storeModal, storeLatLon } from '../../store/index'

const Modal = (props) => {

    const modal = storeModal(state => state)
    const latLon = storeLatLon(state => state)

    useEffect(() => {        
        modal.fnOnChangeModal({field:'fnOpen', value:fnOpen})
        modal.fnOnChangeModal({field:'fnClose', value:fnClose})
    }, [])

    const fnOpen = (component) => {
        modal.fnOnChangeModal({field:'component', value:component})
        modal.fnOnChangeModal({field:'cssAnimationClassCss', value:'in-modal'})
        modal.fnOnChangeModal({field:'boolVisible', value: true})
    }

    const fnClose = () => {
        modal.fnOnChangeModal({field:'cssAnimationClassCss', value:'out-modal'})
        setTimeout(() => {
            modal.fnOnChangeModal({field:'boolVisible', value:false})
            latLon.fnOnChangeLatLon({field:'data', value:null})
        }, 800)
    }

    return (
        modal.boolVisible &&
        <Main>            
            <Container height={props.height} className={modal.cssAnimationClassCss}>
                {
                    modal.buttonClose &&
                    <ButtonCloseModal onClick={() => modal.fnClose()}>X</ButtonCloseModal>
                }
                {modal.component && modal.component}
            </Container>
        </Main>
    )
}

export default Modal