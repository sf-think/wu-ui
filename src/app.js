import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('wu-button', Button)
Vue.component('wu-button-group', ButtonGroup)
Vue.component('wu-icon', Icon)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false
    }
})