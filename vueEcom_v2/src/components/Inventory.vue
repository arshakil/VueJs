<template>
  <div class="inventory">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-2" v-for="(item, index) in items" :key="index">
           
            <div class="card border-warning mb-3" style="max-width: 18rem; height:100%">
               <router-link :to="{path:'Detail/'+item.id}">
              <img class="card-img-top" :src="item.photo" alt="Card image cap">
               </router-link>
              <div class="card-body">
                    <h5 class="card-title" style="height:50px;">{{item.title}}</h5>
                    <!-- <p class="card-text" style="height:30px;" >{{item.description}}</p> -->
                    <strong class="card-text">$ {{item.price}}</strong><br>
                  
                <a href="#" class="btn btn-primary" @click.prevent="addItem(item)">+Add</a>
              </div>
            </div>
           
        </div>
  </div>
  </div>
</template>

<script>

import data from '@/data.json'
export default {
    methods:{
      // adding item to cart
        addItem(item){
         var exists = this.$store.getters.getCart.some(function(cartItem) 
         {
          return cartItem.title === item.title
          });
          if (!exists) {
           this.$store.commit('addToCart', item) 
          }
        }
    },
    mounted(){
        data.forEach(element => {
          this.$store.commit('setInventory', element)
        });
    },
    computed:{
      items(){
        return this.$store.getters.getInventory
      }
    }
    
  
}
</script>

<style scoped>

</style>

