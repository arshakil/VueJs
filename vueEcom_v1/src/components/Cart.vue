<template>
  <div class="cart">
        <h3 class="bg-warning text-center">Cart</h3>
        <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            
            <span class="item-price float-right">Price</span>
            <span class="item-price ml-5">Quantity</span>
            <span class="item-action ml-5">Action</span>
            
        </li>

        <li class="list-group-item" v-for="(item, index) in items" :key="index">
            <span class="item-name">{{item.title}}</span>
            <span class="item-price float-right">{{item.price}}</span>
            <span class="item-price ml-3">{{item.qty}}</span>
            <span class="item-action ml-5 bg-danger p-1 text-white" @click="removeItem(index)">X</span>
        </li>
        </ul>
        <div class="text-right mt-2">Total ${{total}}</div>

        <div class="text-right mt-3" v-if="items.length">
            <button class="btn btn-info text-white" @click="removeAllItems" >CheckOut</button>
        </div>
        


  </div>
</template>

<script>
export default {
    props:['items'],
    computed:{
        total(){
            var total=0;
            this.items.forEach(item => {
                total+=item.price*item.qty
        });
        return total;
        }

    },
    methods:{
        removeItem(index){
            this.$emit('removeItem', index)
        },
        removeAllItems(){
            this.$emit('removeAllItems',"test")
        }
    }
  
}

</script>

<style scoped>

</style>

