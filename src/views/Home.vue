<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Pizza msg=""/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Pizza from '@/components/Pizza.vue'

export default {
  name: 'home',
  components: {
    Pizza
  }
}
</script>
