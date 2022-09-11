import create from 'zustand'

const storeMessage = create(set => ({
    boolVisible: false,
    txtMessage: '',
    cssClassName: '',
    boolIsLoading: false,
    fnSuccess: null,
    fnError: null,
    fnInfo: null,
    fnOnChangeMessage: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeMessage


