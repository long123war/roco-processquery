<template>
  <div id="app">
    <router-view />
    
     <footerbar></footerbar>
  </div>
</template>

<script>

import footerbar from './components/footerbar'

export default {
  data () {
    return {
      
    }
  },
  components: {
    footerbar
  
  }
}
</script>
<style>

</style>
