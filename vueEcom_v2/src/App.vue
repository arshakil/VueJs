<template>
  <div class="App container">
<!-- Nav -->
    <Navbar></Navbar>

    <div class="row mt-3"> 


      <!-- Inventory -->
    <div class="col-8">
          <router-view></router-view>
    </div>


    <!-- Cart -->
    <div class="col-4">
       <Cart></Cart>
    </div>
    
    </div>

  </div>
</template>

<script>

import Cart from '@/components/Cart'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Cart,
    Navbar
  },

}
</script>
<style scoped>

</style>