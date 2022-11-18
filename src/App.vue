<template> 
<div id="app"> 
  <div class="container">    
        <AppHeader/>
        <FilterComplaints/>
        <AllComp/>    

    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script> 
 
import AppHeader from './components/AppHeader.vue'
import AllComp  from './components/AllComp.vue' 
import FilterComplaints from './components/FilterComplaint.vue'

export default {
  name: 'App',
  components: { 
    AppHeader,
    AllComp,
    FilterComplaints
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 

  body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
