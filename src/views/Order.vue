<template>
 <div>
    <div>
      <h1>Order API</h1>
      <p>Send an order API by clicking the button below. This will call the order API using an access token, and the API will validate it using
        the API's audience value.
      </p>

      <b-alert v-if="!profile.email_verified" show>Unable to Order due to unverified email</b-alert>

      <button class="btn btn-success"
        :disabled="!profile.email_verified"
        @click="callApi">Send Order
      </button>
    </div>

    <div v-if="apiMessage">
      <h2>Result</h2>
      <p>{{ apiMessage }}</p>
    </div>

 </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Api",
  data() {
    return {
      apiMessage: null,
      profile: this.$auth.profile
    };
  },
  methods: {
    async callApi() {
      const accessToken = await this.$auth.getAccessToken();

      try {
        const { data } = await axios.get("/api/order", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        this.apiMessage = data.msg;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${ e.response.status }: ${e.response.statusText}'`; }
    }
  }
};
</script>