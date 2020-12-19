<template>
  <div class="task">
    <card :desc="desc" index="1"></card>
    <input v-model="awnser" type="text" placeholder="Antwort" />
    <div v-show="response === undefined" class="check" @click="checkAwnser">
      Überprüfen
    </div>
    <div class="response">
      <img src="@/assets/true.svg" v-show="response === true" />
      <img src="@/assets/false.svg" v-show="response === false" />
    </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
// @ is an alias to /src

export default {
  data() {
    return {
      desc: "Was war deine erste Fernreise?",
      awnser: "",
      response: undefined,
    };
  },
  methods: {
    checkAwnser() {
      console.log(this.awnser);
    },
  },
  name: "Task_1",
  components: {
    card,
  },
};
</script>

<style lang="scss" scoped>
.check {
  display: flex;
  width: 200px;
  height: 60px;

  /* greyRed */

  background: #000;
  color: #fff;
  border-radius: 10px;

  font-size: 24px;
  font-weight: 700;
  align-items: center;
  justify-content: center;

  margin: 67px auto 0;
}

.response {
  margin-top: 49px;
  text-align: center;
}
</style>
