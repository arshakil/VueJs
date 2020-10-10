<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Bar</h2>
    </div>
  <div class="card-img-bottom">
    <column-chart :data="dataSet" xtitle="Budget-Expense" ytitle="Cost" :colors="['#de98ab', '#98ddde']"></column-chart>
  </div>
  </div>
</template>

<script>

export default {
  // # https://chartkick.com/vue#installation
  data() {
    return {
      dataSet:[
        {
          name: '2020-2021', 
          data: {'Budget': 80, 'Expense': 50}
        },

        {
          name: '2021-2022', 
          data: {'Budget': 20, 'Expense': 10}
        }
        ]
    }
  },
  created(){
    this.dataSet[0].name="2022-2023"
    this.dataSet[0].data.Budget=70
    this.dataSet[0].data.Expense=10
  }
};
</script>
