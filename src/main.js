import Vue from 'vue'
import { Button, Row, Col } from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);

new Vue({
  render: h => h(App),
}).$mount('#app')
