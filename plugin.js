import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
<% if (options.lang) { %>
import <%= options.lang %> from 'vee-validate/dist/locale/<%= options.lang %>'
<% } %>
Vue.use(VeeValidate, <%= JSON.stringify(options.nuxtValidateOptions, null, 2) %>)
<% if (options.lang) { %>
Validator.localize('<%= options.lang %>', <%= options.lang %>)
<% } %>

export default ({ app }, inject) => {
  app.validator = Validator
}
