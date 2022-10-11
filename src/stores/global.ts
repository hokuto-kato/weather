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
		async setLatLng(lat: number, lng: number) {
			this.latlng.lat = lat
			this.latlng.lng = lng
		}
	},
	getters: {
		getLat(): number {
			return this.latlng.lat
		},
		getLng(): number {
			return this.latlng.lng
		},
		getKey(): string {
			return this.key
		}
	}
})
