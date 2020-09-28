<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2">
                <input type="text" @keyup.enter="add" v-model="title">
                <!-- <button @click.prevent="add">Add</button> -->
            </div>

        </div>
        <div class="row">
            <div class="col-8 offset-2">
                <p v-for="(n, i) in list" :key="n.title">
                    {{n}} <button @click.prevent="removeItem(i)">X</button>
                </p>
            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            list: []
        }
    },
    methods: {
        add() {
            if (this.title) {
                if (this.list.toString().toLowerCase().indexOf(this.title.toLowerCase()) > -1) {
                    // the search term was found in the array
                    alert("Value exists!")
                } else {
                    // the search term was not found in the array
                    this.list.push(this.title)
                    this.title = ""
                }
            }
        },
        removeItem(item) {
            this.list.splice(item, 1)
        }
    }

}
</script>
