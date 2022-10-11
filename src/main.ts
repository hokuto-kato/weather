import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import 'destyle.css'
import HighchartsVue from 'highcharts-vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faXmark)

const app = createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-dialog', BaseDialog)
app.use(pinia)
// @ts-ignore
app.use(HighchartsVue)
app.mount('#app')
