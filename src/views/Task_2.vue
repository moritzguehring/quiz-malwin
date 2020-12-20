<template>
  <div class="task">
    <card :desc="desc" index="2"></card>
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
      desc: "April 2019: weg waren sie!?",
      awnser: "",
      response: undefined,
      
    };
  },
  methods: {
    checkAwnser() {
      
      if (this.awnser.toLowerCase().includes("haare")) {
        this.response = true;
        setTimeout(() => {
            this.$router.push({ name: 'task_3' });
        }, 2000);
        
      } else {
        this.response = false;
        setTimeout(() => {
            this.response = undefined;
            this.awnser = undefined;
        }, 2000)
      }
    },
  },
  name: "Task_2",
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
