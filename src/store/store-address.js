import create from 'zustand'

const storeGetAddress = create(set => ({
    data: null,
    fnOnChangeAddress: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeGetAddress


