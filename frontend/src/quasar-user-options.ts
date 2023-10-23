import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/mdi-v4.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import { Notify } from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      position: 'top-right',
      timeout: 3500,
      progress: true,
    },
  },
  iconSet: iconSet,
}
