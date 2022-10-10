<script lang="ts" setup>
import { computed } from 'vue'
import { useCurrentWeatherStore } from '@/stores/currentWeather'
const cw = useCurrentWeatherStore()
const name = computed(() => (cw.current.name ? cw.current.name : 'no data'))
const country = computed(() =>
	cw.current.sys.country ? cw.current.sys.country : 'no data'
)
const icon = computed(() =>
	cw.current.weather[0].icon ? cw.current.weather[0].icon : '50d'
)
const weather = computed(() =>
	cw.current.weather[0].main ? cw.current.weather[0].main : 'no data'
)
const temperature = computed(() =>
	cw.current.main.feels_like ? cw.current.main.feels_like : 'no data'
)
</script>
<template>
	<section>
		<header>
			<h1 class="current__location">{{ name }},{{ country }}</h1>
		</header>
		<p class="current__weather">{{ weather }}</p>
		<div class="current__temperature-wrap">
			<img
				:src="`http://openweathermap.org/img/wn/${icon}@2x.png`"
				alt=""
			/>
			<p class="current__temperature__body">
				{{ temperature }}
				<span class="current__temperature__celsius">℃</span>
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
	&__temperature-wrap
		display: flex
		align-items: center
	&__temperature__body
		font-size: 3rem
	&__temperature__celsius
		font-size: 1.5rem
</style>
