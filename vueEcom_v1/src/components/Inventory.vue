<template>
  <div class="inventory">
    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-2" v-for="(item, index) in items" :key="index">
            <div class="card border-warning mb-3" style="max-width: 18rem; height:100%">
              <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_174aa473c0c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_174aa473c0c%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
              <div class="card-body">
             
                    <h5 class="card-title" style="height:50px;">{{item.title}}</h5>
                    <p class="card-text" style="height:30px;" >{{item.description}}</p>
                    <strong class="card-text">$ {{item.price}}</strong><br>
                  

                <a href="#" class="btn btn-primary" @click="addItem(item)">+Add</a>
              </div>
            </div>
        </div>

  </div>
  </div>
</template>

<script>
export default {
    props:['items'],
    methods:{
        addItem(item){
            this.$emit('addToCart',item)
        }
    }
  
}
</script>

<style scoped>

</style>

