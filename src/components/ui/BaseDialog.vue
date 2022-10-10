<script lang="ts" setup>
const props = defineProps(['show'])
const emits = defineEmits(['closeDialog'])
const closeDialog = () => {
	emits('closeDialog')
}
</script>

<template>
	<teleport to="body">
		<div v-if="props.show" @click="closeDialog" class="overlay"></div>
		<transition name="dialog">
			<dialog open class="dialog" v-if="props.show">
				<slot></slot>
			</dialog>
		</transition>
	</teleport>
</template>

<style lang="sass" scoped>
.overlay
	position: fixed
	top: 0
	left: 0
	height: 100vh
	width: 100%
	background-color: rgba(0, 0, 0, 0.7)
	z-index: 2
.dialog
	position: fixed
	inset: 0
	margin: auto
	width: 80vw
	min-height: 100px
	border-radius: 0.375rem
	border: none
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
	padding: 16px
	overflow: hidden
	background-color: #fff
	z-index: 3
	&-enter-from,
	&-leave-to
		opacity: 0
		scale: 0.8
	&-enter-active
		transition: all 0.2s ease-out
	&-leave-active
		transition: all 0.2s ease-in
	&-enter-to,
	&-leave-from
		opacity: 1
		scale: 1
</style>
