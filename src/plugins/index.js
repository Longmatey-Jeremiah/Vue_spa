import VeeValidate from 'vee-validate'
import axios from 'axios'

const plugins = {
    intall(Vue) {
        Vue.use(VeeValidate),
        Vue.use(axios)
    }
}

export default plugins