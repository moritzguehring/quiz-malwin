<template>
  <div class="task">
    <card :desc="desc" index="1"></card>
    <input v-model="awnser" type="text" placeholder="Antwort"/>
    <div @click="checkAwnser"> Überprüfen </div>
    <div class="response">
      <div v-show="response === true">true</div>
      <div v-show="response === false">false</div>

    </div>
  </div>
</template>

<script>

import card from '@/components/Card.vue';
// @ is an alias to /src

export default {
  data(){
    return{
      desc: "erste Aufgabe",
      awnser: "",
      response: undefined
    }
  },
  methods: {
    checkAwnser() {
      console.log(this.awnser)

    }

  },
  name: "Task_1",
  components: {
    card
  },
};
</script>
