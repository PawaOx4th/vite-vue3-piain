import { defineStore } from "pinia";

export const User = defineStore({
  id: "User",
  state: () => ({
    name: "Pawaox4th",
  }),
  getters: {
    get_Name() {
      return this.name.toUpperCase();
    },
  },
  actions: {
    updateName(newName) {
      this.name = newName;
    },
  },
});
