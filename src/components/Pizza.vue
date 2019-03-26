<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
          <img class="mr-3" src="../assets/life.jpg" alt="Life">
          <div class="media-body">
            <h5 class="mt-0">The Answer to Life Pizza</h5>
            €15.00
          </div>
      </div>
      <div class="col-sm">
          <img class="mr-3" src="../assets/cheese.jpg" alt="Cheese">
          <div class="media-body">
            <h5 class="mt-0">Plain Ol' Cheese</h5>
            €13.00
          </div>
      </div>
      <div class="col-sm">
          <img class="mr-3" src="../assets/supreme.jpg" alt="Supreme">
          <div class="media-body">
            <h5 class="mt-0">The Supreme Pizza</h5>
            €15.00
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pizza',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
