<template>
  <div class="task">
    <card :desc="desc" index="1"></card>
    <input v-model="awnser" v-on:keyup.enter="checkAwnser" type="text" placeholder="Antwort" />
    <div v-show="response === undefined" class="check" @click="checkAwnser">
      Überprüfen
    </div>
    <div class="response">
      <img src="@/assets/true.svg" v-show="response === true" />
      <img src="@/assets/false.svg" v-show="response === false" />
    </div>
  </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
// @ is an alias to /src

export default {
  data() {
    return {
      desc: "In welches Land führte Dich deine allererste Fernreise?",
      awnser: "",
      response: undefined,
      
    };
  },
  methods: {
    checkAwnser() {
      if (this.awnser.toLowerCase().includes("afrika")) {
        this.response = true;
        setTimeout(() => {
            this.$router.push({ name: 'task_2' });
        }, 2000)
        
      } else {
        this.response = false;
        setTimeout(() => {
            this.response = undefined;
            this.awnser = undefined;
        }, 2000)
      }
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
.scroll {
  margin-top: 45px;
  color: #f5e7d9;
}
</style>
