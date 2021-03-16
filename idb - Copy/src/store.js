import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats:[]
  },
  mutations: {

  },
  actions: {
    async deleteCat(context, cat) {
      await idb.deleteCat(cat); 
    },
    async getCats(context) {
      context.state.cats = [];
      let cats = await idb.getCats();
      cats.forEach(c => {
        context.state.cats.push(c);
      });
    },
    async addCat(context, cat) {
      console.log('$store... ' + JSON.stringify(cat));
      await idb.addCat(cat);
    },
    async editCat(context, cat) {
      await idb.editCat(cat);
    }
  }
})
