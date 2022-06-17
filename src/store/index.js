import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "../router/router"
import M from "materialize-css";
Vue.use(Vuex);
Vue.use(router);

const storeData = {
    state: {
        products: [],
        inCart: [],
        isAuthencation: true,
        isLoading: false,
        totalItemProduct: 0
    },
    getters: {
        // TODO: Add getters
        products: state => state.products,
        inCart: state => state.inCart,
        getItemInLiked: state => state.products.filter(p => p.liked === "yes"),
        itemsInLiked(state, getters) {
            return getters.getItemInLiked.length;
          },
        total: state => {
            let total = 0;
            state.inCart.map(product => { total += (product.price) * (product.qty) });
            return total
        },
        isAuthencation: state => state.isAuthencation,
        isLoading: state => state.isLoading
    },
    mutations: {
        GET_ALL_PRODUCT(state, products){
            setTimeout(function(){
                state.isLoading = true
            }, 500);
            state.totalItemProduct = products.length
            products.forEach((el) => {
                if(el.liked == "yes"){
                    el.liked = "yes"
                }else {
                    el.liked = "no";
                }
              });
            state.products = products
        },
        ADD_PRODUCT(state,product){
            state.products.push(product)
        },
        DELETE_PRODUCT(state,productinvID){
            state.products =  state.products.filter(item => item.invId !== productinvID)
        },
        EDIT_PRODUCT(state,product){
            state.products.forEach(item => {
                if(item.invId == product.invId){
                    item = product
                }
            })
        },

        // Cart
        ADD_TO_CART(state, item) {
            const itemCart = state.inCart.find(product => product.invId === item.invId)
            if(itemCart){
                itemCart.qty++
            }else{
                state.inCart.push({...item, qty:1})
            }
        },
        DELETE_ITEM_CART (state, invId) {
            state.inCart = state.inCart.filter(product => product.invId !== invId)
        },
        ADD_QTY_ITEM_CART(state, invId){
            const item = state.inCart.find(product => product.invId === invId)
            item.qty++
        },
        REDUCE_QTY_ITEM_CART(state, invId){
            const item = state.inCart.find(product => product.invId === invId)
            if(item.qty > 1) {
                item.qty--
            }else {
                state.inCart = state.inCart.filter(product => product.invId !== invId)
            }
        },

        // Favorite
        ADD_TO_LIKED(state, invID){
            const item = state.products.find(p => p.invId === invID)
            if(item){
                item.liked = "yes"
            }
        },
        REMOVE_TO_LIKED(state, invID){
            const item = state.products.find(p => p.invId === invID)
            if(item){
                item.liked = "no"
            }
        },

        // Authen
        GET_AUTHEN(state){
            state.isAuthencation = !state.isAuthencation
        }
    },
    actions: {
        // TODO: Add actions
        async getAllProduct({commit}){
            try {
                const res = await axios.get(`https://6177a06f9c328300175f5a35.mockapi.io/products`)
                commit('GET_ALL_PRODUCT', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        async addProduct({commit},product){
            try {
                await axios.post('https://6177a06f9c328300175f5a35.mockapi.io/products', product)
                commit('ADD_PRODUCT', product)
                const txt = 'Item is created.'
                M.toast({html: txt, classes: 'green'})
                router.push({name: 'product.list.manager'})
            } catch (error) {
                console.log(error)
            }
        },
        async deleteProduct({commit}, productinvID){
            try {
                await axios.delete(`https://6177a06f9c328300175f5a35.mockapi.io/products/${productinvID}`)
                commit('DELETE_PRODUCT', productinvID)
                const txt = 'Item is deleted.'
                M.toast({html: txt, classes: 'red'})
                router.push({name: 'product.list.manager'})
            } catch (error) {
                console.log(error)
            }
        },
        async editProduct({commit},product){
            try {
                await axios.put(`https://6177a06f9c328300175f5a35.mockapi.io/products/${product.invId}`,product)
                commit('EDIT_PRODUCT', product)
                const txt = 'Item is changed.'
                M.toast({html: txt, classes: 'green'})
                router.push({name: 'product.list.manager'})
            } catch (error) {
                console.log(error)
            }
        },

        // Cart
        addToCart({commit}, item){
            commit('ADD_TO_CART', item)
            const txt = 'Item is added to cart.'
            M.toast({html: txt, classes: 'green'})
        },
        deleteItemCart({commit},invId) {
            commit('DELETE_ITEM_CART', invId)
        },
        addQtyItemCart({commit},invId) {
            commit('ADD_QTY_ITEM_CART', invId)
        },
        reduceQtyItemCart({commit},invId) {
            commit('REDUCE_QTY_ITEM_CART', invId)
        },

        // Favorite
        addToLiked({commit},invId){
            commit('ADD_TO_LIKED',invId)
            const txt = 'Item is added favorite.'
            M.toast({html: txt, classes: 'blue lighten-1'})
        },
        removeToLiked({commit},invId){
            const txt = 'Item is removed favorite.'
            M.toast({html: txt, classes: 'pink lighten-1'})
            commit('REMOVE_TO_LIKED',invId)
        },

        // Authencation
        getAuthen({commit}){
            commit('GET_AUTHEN')
        }
    },
}
const store = new Vuex.Store(storeData)
export default store
