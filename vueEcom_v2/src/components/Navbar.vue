<template>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0">
        <router-link to="/"><a class="navbar-brand">Navbar</a></router-link>
              
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">   
            <router-link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
            
          </li>
          <li class="nav-item">
            <router-link to="/detail"> <a class="nav-link" href="#">Detail</a></router-link>
          </li>
        
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" onsubmit="return false">
          <input class="form-control mr-sm-2"  @keyup.prevent="search" v-model.trim="qs" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </div>
      </nav>

</template>

<script>
import data from '@/data.json'

export default {

    data(){
        return {
            qs:""
        }
    },
    methods:{
        search(){
            for (var i=0 ; i < data.length ; i++)
            {
                if (data[i].title == this.qs) {
                    // results.push(obj.list[i]);
                    console.log("data",data[i])
                    this.$store.commit('removeInventory',{})
                    this.$store.commit('setInventory',data[i])
                    // this.$store.commit('setInventory',data[i])
                }
             }
        }

    },
  
}
</script>

<style scoped>

</style>

