import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
    state:{
        show:false
    },
    mutations:{   // 同步操作
        switch_dialog(state){ //这里的state对应着上面的 state
            state.show = state.show?false:true;
            //你可以在这里执行其他操作改变state
            console.log(state.show)
        }
    },
    actions:{  // 推荐  异步操作放到这里
        switch_dialog(content){ // 这里content和我们使用的$store 拥有相同的对象和方法
            // console.log(content.commit('switch_dialog'))
            content.commit('switch_dialog')
        }
    },
    getters:{ // 类似于vue中的computed
        not_show(state){ //这里的state对应的是上面这个state
            return !state.show;
        }
    }
})