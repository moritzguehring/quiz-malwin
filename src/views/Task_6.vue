<template>
  <div class="task">
    <card :desc="desc" index="6"></card>
    <input v-model="awnser" v-on:keyup.enter="checkAwnser" type="text" placeholder="Antwort" />
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
      desc: 'Suche die "besondere" Zahl aus den Quersummen deiner in Zahlen dargestellten Vornamen,\
       dividiert durch den kleinsten gemeinsamen Teiler > 1!' ,
      awnser: "",
      response: undefined,
      
    };
  },
  methods: {
    checkAwnser() {    
      if (this.awnser === "22") {
        this.response = true;
        setTimeout(() => {
            this.$router.push({ name: 'task_7' });
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
  name: "Task_6",
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
