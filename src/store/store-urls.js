import create from 'zustand'

const storeUrls = create(set => ({    
	urlTemperature: 	'http://api.openweathermap.org/data/2.5/onecall?',
	urlAddress: 		'https://nominatim.openstreetmap.org/reverse?format=jsonv2&',	
    fnOnChangeUrls: (obj) => set(state => ({...state, [obj.field]:obj.value }))
}))

export default storeUrls