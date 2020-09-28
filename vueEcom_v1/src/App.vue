<template>
  <div class="App container">
<!-- Nav -->
    <Navbar @searchQuery="searchQuery"></Navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->


    <div class="row mt-3"> 
      <!-- Inventory -->
    <div class="col-8">
    <Inventory :items="items" @addToCart="addItemToCart"></Inventory>
    </div>
    <!-- Cart -->
    <div class="col-4">
       <Cart :items="cart" @removeItem='removeCartItem' @removeAllItems="test"></Cart>
    </div>
    
    </div>

  </div>
</template>

<script>

import Cart from '@/components/Cart';
import Inventory from '@/components/Inventory'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Cart,
    Inventory,
    Navbar
  },
  data(){
    return{
      items:[
        {'title':"First item Title",'description':"First title discription",'price':12, 'qty':0},
        {'title':"Second item Title",'description':"Second title discription",'price':14, 'qty':0},
        {'title':"Third item Title",'description':"Third title discription",'price':20, 'qty':0},
        {'title':"fourth item Title",'description':"fourth title discription",'price':25, 'qty':0},
      ],
      newItem:[
        {'title':"First item Title",'description':"First title discription",'price':12, 'qty':0},
        {'title':"Second item Title",'description':"Second title discription",'price':14, 'qty':0},
        {'title':"Third item Title",'description':"Third title discription",'price':20, 'qty':0},
        {'title':"fourth item Title",'description':"fourth title discription",'price':25, 'qty':0},

      ],
      cart:[]
    }
    
  },


  methods:{
    addItemToCart(item){
      var exists = this.cart.some(function(cartItem) {
        return cartItem.title === item.title
      });
      if (!exists) {
        item.qty=1
        this.cart.push(item)
      }
      else{
         item.qty= item.qty+1
        // alert("This Item is Aready added")
      }
    },
    removeCartItem(index){
      this.cart.splice(index,1)
    },
    searchQuery(qs){
      this.items = this.newItem
      console.log("search:", qs)
      console.log(this.newItem)

      this.items = this.items.filter(item => {
      // console.log("item::",item.title.toLowerCase().indexOf(qs.toLowerCase()) !== -1)
      return item.title.toLowerCase().indexOf(qs.toLowerCase()) !== -1
      });
    },
    test(){
      if( confirm("Are sure you want to remove all Cart items")){
      console.log("test")
      this.cart=[]
      }
     

    }

  },


  computed:{

  },
  mounted(){

  }


}
</script>
<style scoped>

</style>