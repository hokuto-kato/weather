<script lang="ts" setup>
import { computed } from 'vue'
import { Chart } from 'highcharts-vue'
import { useHourlyForecastStore } from '@/stores/hourlyForecast'
const df = useHourlyForecastStore()
const chartOptions = computed(() => {
	return {
		chart: {
			type: 'line',
			style: {
				fontFamily: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
			}
		},
		title: { text: '' },
		series: [
			{
				name: 'temperature',
				data: df.temperatures,
				pointStart: df.startDate,
				pointInterval: 3600 * 3000
			}
		],
		credits: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				minute: '%H:%M',
				hour: '%m/%d %H:%M',
				day: '%m/%d',
				week: '%m/%d',
				month: '%m',
				year: '(%Y)'
			}
		},
		yAxis: {
			labels: {
				formatter(): any {
					// @ts-ignore
					return `${this.value}°C`
				}
			},
			alignTicks: false,
			title: {
				enabled: false
			}
		},
		legend: {
			enabled: false
		}
	}
})
</script>
<template>
	<Chart :options="chartOptions" class="chart" />
</template>
<style lang="sass" scoped>
.chart
	margin-top: 30px
</style>
