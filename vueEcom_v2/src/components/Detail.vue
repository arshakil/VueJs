<template>
  <div class="detail">
      <!-- <h1>Detail Page</h1> -->
      <!-- {{$route.params.id}} -->
       <div class="row">
        <div class="col-8 offset-2 mb-2">
            <div v-if="item" class="card border-warning mb-3" style="height:100%">
              <img class="card-img-top" :src="item.photo" alt="Card image cap">
              <div class="card-body">
                    <h5 class="card-title" style="height:50px;">{{item.title}}</h5>
                    <!-- <p class="card-text" style="height:30px;" >{{item.description}}</p> -->
                    <strong class="card-text">$ {{item.price}}</strong><br>   
                <a href="#" class="btn btn-primary" @click.passive="addItem(item)">+Add</a>
              </div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
        data(){
            return{
                item: null

            }
        },
        methods:{
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
                if (element.id==this.$route.params.id){
                    this.item=element
                    console.log('element',element)
                }
                
         });

    }
  
}
</script>

<style scoped>

</style>

