import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	server: {
		open: true,
		host: true
	},
	css: {
		devSourcemap: true
	},
	plugins: [vue()]
})
