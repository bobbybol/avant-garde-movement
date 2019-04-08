import Vue from 'vue';
import router from '@/router';
import './registerServiceWorker';

import Shell from '@/components/Shell/Shell.vue';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(Shell)
}).$mount('#app');
