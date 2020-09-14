import Vue from 'vue'
import {
  required,
  confirmed,
  length,
  email,
  min,
  max
} from 'vee-validate/dist/rules'
import {
  ValidationProvider,
  ValidationObserver,
  extend
} from 'vee-validate'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('min', { ...min })
extend('max', { ...max })
extend('email', { ...email })
extend('length', { ...length })
extend('required', { ...required })
extend('confirmed', { ...confirmed })
