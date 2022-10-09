import { defineStore } from 'pinia'
import { useStore } from '@/stores/global'

export const useCurrentWeatherStore = defineStore({
	id: 'current',
	state: () => {
		return {
			current: {}
		}
	},
	actions: {
		async setCurrentWeather() {
			const { latlng, key } = useStore()
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat}&lon=${latlng.lng}&appid=${key}`
			const response = await fetch(url)
			const responseData = await response.json()
			if (!response.ok) {
				throw new Error(responseData.message || 'Failed to fetch')
			}
			this.current = responseData
		},
		clearCurrentWeather() {
			this.current = {}
		}
	}
})
