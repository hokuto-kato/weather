import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	base: './',
	root: './',
	server: {
		open: true,
		host: true
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			sass: {
				additionalData: `@import "@/assets/sass/main.sass"`
			}
		}
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
