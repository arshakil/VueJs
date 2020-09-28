export const storage = {
    state: {
        inventory:[],
        cart:[]
    },
    getters:{
        getInventory(state)
        {
            return state.inventory
        },
        getCart(state)
        {
            return state.cart
        }
    },
    mutations:{
        setInventory(state, payload){
            state.inventory.push(payload)
        },
        addToCart(state, payload){
            state.cart.push(payload)
        },
        removeItem(state, payload){
            state.cart.splice(payload,1)
        },
        removeInventory(state){
            state.inventory.push([])
        },
    }



}