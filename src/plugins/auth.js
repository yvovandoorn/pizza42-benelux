import authProvider from '../auth/authProvider';

export default {
  install(Vue) {
    Vue.prototype.$auth = authProvider;

    Vue.mixin({
      created() {
        if (this.handleLoginEvent) {
          authProvider.addListener('loginEvent', this.handleLoginEvent);
        }
      },

      destroyed() {
        if (this.handleLoginEvent) {
          authProvider.removeListener('loginEvent', this.handleLoginEvent);
        }
      }
    });
  }
};
