<template>
  <div v-if="profile">
    <div>
      <div>
        <img :src="profile.picture">
      </div>
      <div>
        <h2>{{ profile.name }}</h2>
        <p v-if="profile.gender">You are <b-badge>{{ profile.gender }}</b-badge></p>
        <p>{{ profile.email }}</p>
        <b-alert variant="success" v-if="profile.email_verified" show>verified email</b-alert>
        <b-alert v-if="!profile.email_verified" show>unverified email</b-alert>
      </div>
    </div>

    <div>
      <pre><code>{{ JSON.stringify(profile, null, 2) }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
  }
};
</script>