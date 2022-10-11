<script lang="ts" setup>
import { useCurrentWeatherStore } from '@/stores/currentWeather'
import { storeToRefs } from 'pinia'
const currentWeatherStore = useCurrentWeatherStore()
const { getName, getIcon, getWeather, getTemperature } =
	storeToRefs(currentWeatherStore)
</script>
<template>
	<section>
		<header>
			<h1 class="current__location">{{ getName }}</h1>
		</header>
		<p class="current__weather">{{ getWeather }}</p>
		<div class="current__temperature-wrap">
			<p class="current__temperature__img">
				<img :src="getIcon" :alt="getWeather" />
			</p>
			<p class="current__temperature__body">
				{{ getTemperature }}
				<span class="current__temperature__celsius">&#8451;</span>
			</p>
		</div>
	</section>
</template>
<style lang="sass" scoped>
.current
	&__location
		font-size: 2rem
	&__weather
		font-size: 1.5rem
		margin-top: .5rem
	&__temperature
		&-wrap
			display: flex
			align-items: center
		&__img
			width: 100px
			height: 100px
		&__body
			font-size: 3rem
		&__celsius
			font-size: 1.5rem
</style>
