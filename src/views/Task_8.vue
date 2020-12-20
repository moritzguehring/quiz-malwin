<template>
  <div class="task">
    <card :desc="desc" index="8"></card>
    <input v-model="awnser" v-on:keyup.enter="checkAwnser" type="text" placeholder="_ _ _ _ _ _ _" />
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
import {APIService} from '../APIService';
const apiService = new APIService();
// @ is an alias to /src

export default {
  data() {
    return {
      desc: '\
        Finde nun aus den Lösungen einen Code, um das Ziel zu erreichen! <br> \
        1. <span style="color: red">A</span>frika<br>\
        2. <span style="color: red">H</span>aare<br>\
        3. <span style="color: red">J</span>oschi<br>\
        4. <span style="color: red">49</span> \
        <span style="font-size: 18px">[Super! Aber diese Aufgabe war just for fun ;)]</span><br>\
        5. Hous<span style="color: red">e</span>ball/Bi<span style="color: red">e</span>rpong<br>\
        6. <span style="color: red">22</span><br>\
        7. Bä<span style="color: red">r</span><br>\
      ' ,
      awnser: "",
      response: undefined,
      
    };
  },
  methods: {
    checkAwnser() {    
      if (this.awnser.toLowerCase().includes("22") && this.awnser.toLowerCase().includes("jahre")) {
        this.response = true;
        setTimeout(() => {
          apiService.triggerEvent().then(this.$router.push({ path: `success`}));
            
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
  name: "Task_8",
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
