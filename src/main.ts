import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import 'destyle.css'
import HighchartsVue from 'highcharts-vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('base-dialog', BaseDialog)
app.use(pinia)
app.use(HighchartsVue)
app.mount('#app')
