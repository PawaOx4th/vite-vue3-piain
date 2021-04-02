import { defineStore } from "pinia";

export const Store = defineStore({
  id: "storeName",
  // can also be defined with an arrow function if you prefer that syntax
  state() {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  getters: {
    getCounter() {
      return this.counter;
    },
  },
  actions: {
    incrementCounter() {
      this.counter++;
    },
  },
});
