import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

import App from './App.vue'
import router from './router'
import quasarUserOptions from './quasar-user-options'

import '@mdi/font/css/materialdesignicons.css'
import 'quasar/dist/quasar.sass'
import './styles/main.css'

SuperTokens.init({
    appInfo: {
        apiDomain: "http://localhost:5001",
        apiBasePath: "/auth",
        appName: "minerva-avalie",
    },
    recipeList: [
        Session.init(),
        EmailPassword.init(),
    ],
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, quasarUserOptions)

app.mount('#app')
