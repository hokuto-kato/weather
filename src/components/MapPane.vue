<script lang="ts" setup>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { useCurrentWeatherStore } from '@/stores/currentWeather'
import { useStore } from '@/stores/global'
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'

const globalStore = useStore()
const cw = useCurrentWeatherStore()
const show = ref(false)
const showWeather = (e: { latlng: object }) => {
	if (!e.latlng) return
	globalStore.setLatLng(e.latlng)
	cw.setCurrentWeather()
	show.value = true
}
const closeDialog = () => {
	show.value = false
	cw.clearCurrentWeather()
}
</script>

<template>
	<base-dialog :show="show" @closeDialog="closeDialog">
		<template #header>
			<h2>{{ cw.current.name }}</h2>
		</template>
		<template #body>
			<p>{{ cw.current }}</p>
		</template>
	</base-dialog>
	<l-map
		style="height: 100vh; width: 100vw"
		:center="[0, 0]"
		:zoom-animation="true"
		:fade-animation="true"
		:zoom="1"
		:zoom-control="false"
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
