import { defineStore } from 'pinia'
import { useStore } from '@/stores/global'

export const useHourlyForecastStore = defineStore({
	id: 'hourly',
	state: () => {
		return {
			hourly: {
				city: {},
				cnt: 0,
				cod: '',
				list: [
					{
						dt: 0
					}
				],
				message: 0
			},
			temperatures: [] as number[],
			startDate: 0
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
			this.hourly = {
				city: {},
				cnt: 0,
				cod: '',
				list: [],
				message: 0
			}
		},
		async setTemperatures() {
			this.temperatures = this.hourly.list.map(
				(item: any) => item.main.feels_like
			)
			this.startDate = this.hourly.list[0].dt * 1000
		}
	}
})
