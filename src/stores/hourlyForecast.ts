import { defineStore } from 'pinia'
import { useStore } from '@/stores/global'

export const useHourlyForecastStore = defineStore({
	id: 'hourly',
	state: () => {
		return {
			hourly: {},
			temperatures: [],
			startDate: ''
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
			this.hourly = responseData
		},
		clearHourlyForecast() {
			this.hourly = {}
		},
		async setTemperatures() {
			this.temperatures = this.hourly.list.map(
				(item) => item.main.feels_like
			)
			this.startDate = `${this.hourly.list[0].dt}000`
			this.startDate = Number(this.startDate)
		}
	}
})
