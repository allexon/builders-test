import create from 'zustand'

const storeModal = create(set => ({
    boolVisible: false,
    buttonClose: false,
    fnOpen: null,
	fnClose: null,
    cssAnimationClassCss: '',
    component: null,
    fnOnChangeModal: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeModal