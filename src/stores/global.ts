import { defineStore } from 'pinia'
const key: string = import.meta.env.VITE_WEATHER_API_KEY
export const useStore = defineStore({
	id: 'global',
	state: () => {
		return {
			latlng: {
				lat: 0,
				lng: 0
			},
			key
		}
	},
	actions: {
		async setLatLng(latlng: any) {
			this.latlng = latlng
		}
	}
})
