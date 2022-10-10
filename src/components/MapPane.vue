<script lang="ts" setup>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { useCurrentWeatherStore } from '@/stores/currentWeather'
import { useHourlyForecastStore } from '@/stores/hourlyForecast'
import { useStore } from '@/stores/global'
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'
import CurrentWeather from '@/components/CurrentWeather.vue'
import HourlyForecast from '@/components/HourlyForecast.vue'

const globalStore = useStore()
const cw = useCurrentWeatherStore()
const df = useHourlyForecastStore()
const show = ref(false)
const showWeather = async (e: { latlng: object }) => {
	if (!e.latlng) return
	show.value = true
	globalStore.setLatLng(e.latlng)
	await cw.setCurrentWeather()
	await df.setHourlyForecast()
	await df.setTemperatures()
}
const closeDialog = () => {
	show.value = false
	cw.clearCurrentWeather()
	df.clearHourlyForecast()
}
</script>

<template>
	<base-dialog :show="show" @closeDialog="closeDialog">
		<section>
			<current-weather></current-weather>
			<hourly-forecast></hourly-forecast>
		</section>
	</base-dialog>
	<l-map
		style="height: 100vh; width: 100vw"
		:center="[0, 0]"
		:zoom-animation="true"
		:fade-animation="true"
		:zoom="1"
		:zoom-control="false"
		:inertia="true"
		:inertiaDeceleration="3000"
		:inertiaMaxSpeed="1500"
		:easeLinearity="0.2"
		:maxBoundsViscosity="0.0"
		@click="showWeather"
	>
		<l-tile-layer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			:max-zoom="18"
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		></l-tile-layer>
	</l-map>
</template>

<style lang="sass" scoped>
.leaflet-container
	background-color: #000
</style>
