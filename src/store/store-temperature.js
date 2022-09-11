import create from 'zustand'

const storeGetTemperature = create(set => ({
    data: null,
    fnOnChangeTemperature: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeGetTemperature


