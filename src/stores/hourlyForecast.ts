import { defineStore, storeToRefs } from 'pinia'
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
			const globalStore = useStore()
			const { getLng, getLat, getKey } = storeToRefs(globalStore)
			const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${getLat.value}&lon=${getLng.value}&units=metric&appid=${getKey.value}`
			const response = await fetch(url)
			const responseData = await response.json()
			if (!response.ok) {
				throw new Error(responseData.message || 'Failed to fetch')
			}
			this.hourly = responseData
		},
		clearHourlyForecast() {
			this.$reset()
		},
		async setTemperatures() {
			this.temperatures = this.hourly.list.map(
				(item: any) => item.main?.feels_like
			)
			this.startDate = this.hourly.list[0].dt * 1000
		}
	},
	getters: {
		getTemperatures(): number[] {
			return this.temperatures
		},
		getStartDate(): number {
			return this.startDate
		}
	}
})
