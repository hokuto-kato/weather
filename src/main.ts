import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import 'destyle.css'
const app = createApp(App)
const BaseDialog = defineAsyncComponent(
	() => import('./components/ui/BaseDialog.vue')
)
app.component('base-dialog', BaseDialog)
app.mount('#app')
