import { defineStore } from 'pinia'
const key = import.meta.env.VITE_WEATHER_API_KEY
export const useStore = defineStore({
	id: 'global',
	state: () => {
		return {
			latlng: {},
			key
		}
	},
	actions: {
		setLatLng(latlng: object) {
			this.latlng = latlng
		}
	}
})
