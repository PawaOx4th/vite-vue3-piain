<template>
  <div>aaa</div>
  <pre>{{ state }}</pre>
  <pre>{{ getter }}</pre>
  <button @click="handleCounter()">handleCounter</button>
  <hr />
  <input type="text" v-model="name" />
  <pre>
    {{ username }}
    {{ userNameUpperCase }}
  </pre>
  <button @click="handleName()">HANDLENAME</button>
</template>
<script>
import { ref, computed } from "vue";
// import { Store } from "./store/store.js";
import { Store, User } from "./store/index.js";
export default {
  name: "App",
  setup() {
    //
    const store = Store();
    const state = store.counter;
    const getter = computed(() => store.getCounter);
    function handleCounter() {
      return store.incrementCounter();
    }

    //
    const user = User();
    const username = user.name;
    const userNameUpperCase = computed(() => user.get_Name);
    const name = ref();
    function handleName() {
      user.updateName(name.value);
      name.value = "";
    }

    return {
      state,
      getter,
      handleCounter,
      name,
      username,
      userNameUpperCase,
      handleName,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.5em;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
