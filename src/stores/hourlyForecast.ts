import { defineStore } from 'pinia'
import { useStore } from '@/stores/global'

export const useHourlyForecastStore = defineStore({
	id: 'daily',
	state: () => {
		return {
			daily: {},
			temperatures: []
		}
	},
	actions: {
		async setHourlyForecast() {
			const { latlng, key } = useStore()
			const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latlng.lat}&lon=${latlng.lng}&units=metric&appid=${key}`
			const response = await fetch(url)
			const responseData = await response.json()
			if (!response.ok) {
				throw new Error(responseData.message || 'Failed to fetch')
			}
			this.daily = responseData
		},
		clearHourlyForecast() {
			this.daily = {}
		},
		setTemperatures() {
			this.temperatures = this.daily.list.map(
				(item) => item.main.feels_like
			)
		}
	},
	getters: {
		getTemperatures(): number[] {
			return this.temperatures
		}
	}
})
