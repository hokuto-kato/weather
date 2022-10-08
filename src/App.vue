<script setup lang="ts">
import MapPane from './components/MapPane.vue'
</script>

<template>
	<map-pane></map-pane>
</template>

<style>
#app {
	z-index: 1;
	position: relative;
}
body {
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>
