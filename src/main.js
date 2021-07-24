import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import channel from './services/channel';

channel.getChannels();
createApp(App).use(store).use(router).mount('#app');
