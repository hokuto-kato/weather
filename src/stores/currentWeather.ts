import { defineStore } from 'pinia'
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
			const { latlng, key } = useStore()
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat}&lon=${latlng.lng}&units=metric&appid=${key}`
			const response = await fetch(url)
			const responseData = await response.json()
			if (!response.ok) {
				throw new Error(responseData.message || 'Failed to fetch')
			}
			this.current = responseData
		},
		clearCurrentWeather() {
			this.current = initialCurrentWeather
		}
	}
})
