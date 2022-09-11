import create from 'zustand'

const storeLatLon = create(set => ({
    data: null,
    fnOnChangeLatLon: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeLatLon


