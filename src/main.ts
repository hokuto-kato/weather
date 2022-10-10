import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import 'destyle.css'
import HighchartsVue from 'highcharts-vue'

const app = createApp(App)
const pinia = createPinia()
const BaseDialog = defineAsyncComponent(
	() => import('@/components/ui/BaseDialog.vue')
)

app.component('base-dialog', BaseDialog)
app.use(pinia)
app.use(HighchartsVue)
app.mount('#app')
