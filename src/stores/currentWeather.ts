import { defineStore, storeToRefs } from 'pinia'
import { useStore } from '@/stores/global'

const initialCurrentWeather = {
	base: '',
	clouds: {
		all: 0
	},
	cod: 0,
	coord: {
		lat: 0,
		lon: 0
	},
	dt: 0,
	id: 0,
	main: {
		feels_like: 0,
		grnd_level: 0,
		humidity: 0,
		pressure: 0,
		sea_level: 0,
		temp: 0,
		temp_max: 0,
		temp_min: 0
	},
	name: '',
	sys: {
		country: '',
		id: 0,
		sunrise: 0,
		sunset: 0,
		type: 0
	},
	timezone: 0,
	visibility: 0,
	weather: [
		{
			description: '',
			icon: '',
			id: 0,
			main: ''
		}
	],
	wind: {
		deg: 0,
		gust: 0,
		speed: 0
	}
}
export const useCurrentWeatherStore = defineStore({
	id: 'current',
	state: () => {
		return {
			current: initialCurrentWeather
		}
	},
	actions: {
		async setCurrentWeather() {
			const globalStore = useStore()
			const { getLng, getLat, getKey } = storeToRefs(globalStore)
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${getLat.value}&lon=${getLng.value}&units=metric&appid=${getKey.value}`
			const response = await fetch(url)
			const responseData = await response.json()
			if (!response.ok) {
				throw new Error(responseData.message || 'Failed to fetch')
			}
			this.current = responseData
		},
		clearCurrentWeather() {
			this.$reset()
		}
	},
	getters: {
		getName(): string {
			if (this.current.name !== '' && this.current.sys.country !== '') {
				return `${this.current.name}, ${this.current.sys.country}`
			} else {
				return 'no data were available'
			}
		},
		getIcon(): string {
			return `http://openweathermap.org/img/wn/${this.current.weather[0].icon}@2x.png`
		},
		getWeather(): string {
			return this.current.weather[0].description
		},
		getTemperature(): number {
			return this.current.main.feels_like
		}
	}
})
