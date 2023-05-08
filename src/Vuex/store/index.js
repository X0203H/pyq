import VuexEsm from "vuex";
import Vue from "vue";

Vue.use(VuexEsm)

const actions = {
    Item(context, value) {
        // console.log(context, value)
        context.commit('ITEM', value)
    },
    changenewly(context, value) {
        context.commit('CHANGENEWLY', value)
    }
}
const mutations = {
    ITEM(state, value) {
        // console.log(state, value)
        state.a = value
        // console.log(state.a)
    },
    CHANGENEWLY(state, value) {
        state.centerDialogVisible2 = value
        console.log(state.centerDialogVisible2)
    }
}
const state = {
    a: '',
    centerDialogVisible2: false
}

// 导出vuex里面的方法和数据
export default new VuexEsm.Store({
    actions,
    mutations,
    state
})