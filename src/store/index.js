import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{ // состояние
        inputs:[
            {
                title:'FirstName',
                type:'text',
                value:'',
                pattern:/^([^0-9]*)$/
            },
            {
                title:'LastName',
                type:'text',
                value:'',
                pattern:/^([^0-9]*)$/
            },
            {
                title:'Email',
                type:'text',
                value:'',
                pattern:/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            {
                title:'Phone',
                type:'text',
                value:'',
                pattern:/^(\+7|8)?([0-9]{9,10})$/
            },
        ] 
    },
    getters:{
        inputs(state){
            return state.inputs;
        }
    },
    mutations:{
        onInput(state, payload){
            state.inputs[payload.index].value = payload.value;
        }
    },
})