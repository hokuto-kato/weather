<script setup>
const props = defineProps(['show'])
</script>
<template>
	<teleport to="body">
		<div v-if="props.show" @click="close" class="overlay"></div>
		<transition name="dialog">
			<dialog open v-if="props.show">
				<section class="wrap">
					<slot></slot>
				</section>
			</dialog>
		</transition>
	</teleport>
</template>
<style scoped>
.wrap {
	padding: 16px;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 2;
}
dialog {
	position: fixed;
	inset: 0;
	margin: auto;
	width: 80vw;
	min-height: 100px;
	border-radius: 0.375rem;
	border: none;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
	padding: 0;
	overflow: hidden;
	background-color: #fff;
	z-index: 3;
}
.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
	scale: 0.8;
}
.dialog-enter-active {
	transition: all 0.2s ease-out;
}
.dialog-leave-active {
	transition: all 0.2s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
	opacity: 1;
	scale: 1;
}
</style>
