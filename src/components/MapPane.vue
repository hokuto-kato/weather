<script lang="ts" setup>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
const handleClick = (e: { latlng: object }) => {
	if (!e.latlng) return
	console.log(e.latlng)
}
</script>

<template>
	<base-dialog :show="true">
		<h2>this is dialog</h2>
	</base-dialog>
	<l-map
		style="height: 100vh; width: 100vw"
		:center="[0, 0]"
		:zoom-animation="true"
		:fade-animation="true"
		:zoom="1"
		:zoom-control="false"
		@click="handleClick"
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
