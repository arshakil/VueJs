<template>
  <div class="list container">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>
<script>
import EventCard from'@/components/EventCard.vue'
// import axios from 'axios'
import EventService from '../services/EventServices.js'
export default {
  components:{
    EventCard,
  },
  data(){
    return {
      events:[]
    }
  },
   mounted(){
      EventService.getEvents()
      .then(response => {
            this.events = response.data
           console.log("data is: ", response)
          })

}
  
}
</script>