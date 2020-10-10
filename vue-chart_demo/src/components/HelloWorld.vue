<template>
<div>
    <h1>Chart Demo</h1>
<div class="container" style="margin-bottom:200px">
    <div class="row mt-4">
      <div class="col-6">
        <ChartBar />
      </div>
        <div class="col-6">
        <ChartDoughnut />
      </div>   
    </div>


    <hr style="background:red">
    <hr style="background:blue">


      <div class="row mt-4">
      <div class="col-6">
       <ChartLine />
      </div>
        <div class="col-6">
        <ChartkickBar />
      </div>
    </div>
  
</div>
  </div>
</template>

<script>
import ChartBar from "@/components/chart-bar";
import ChartDoughnut from "@/components/chart-doughnut";
import ChartLine from "@/components/chart-line";
import ChartkickBar from "@/components/ChartkickBar";
export default {
   components: {
    ChartBar,
    ChartDoughnut,
    ChartLine,
    ChartkickBar,
  }

}
</script>

<style>

.grid {
  display: grid;
  row-gap: 2rem;
}

</style>
