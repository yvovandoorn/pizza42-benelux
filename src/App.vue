<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand text-info">Pizza 42 Benelux</a>
        <div>
          <ul class="navbar-nav mr-auto">
            <b-button-group>          
              <b-button variant="info" to="/">Home</b-button>          
              <b-button variant="info" to="/about">About</b-button>     
              <b-button v-if="isAuthenticated" variant="info" to="/profile">Profile</b-button>
              <b-button v-if="isAuthenticated" variant="info" to="/order">Order Pizza</b-button>
              <b-button v-if="!isAuthenticated" variant="primary" type=button @click.prevent="login">Login</b-button>
              <b-button v-if="isAuthenticated" variant="danger" type=button @click.prevent="logout">Log out</b-button>
            </b-button-group>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      isAuthenticated: false
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};
</script>
