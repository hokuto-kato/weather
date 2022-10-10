<script setup>
import { useCurrentWeatherStore } from '@/stores/currentWeather'
const cw = useCurrentWeatherStore()
</script>
<template>
	<header>
		<h2>{{ cw.current.name }}</h2>
	</header>
</template>
<style scoped></style>
