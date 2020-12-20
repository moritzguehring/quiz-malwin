<template>
  <div class="card">
    <h2 v-show="index < 8">Aufgabe {{ index }}/7</h2>
    <div class="desc">
      <span v-html="desc"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["index", "desc"],
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  min-height: 160px;
  width: calc(100% - 72px);

  background: #ffb629;
  border: 2px solid #ffaa05;
  box-shadow: 0px 4px 42px rgba(237, 111, 40, 0.39);
  border-radius: 30px;

  margin-top: 88px;

  padding: 24px;

  h2 {
    position: absolute;
    top: -80px;
    margin-left: -12px;

    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: rgba(0, 0, 0, 0.35);
  }

  .desc {
    font-weight: 500;
    font-size: 36px;

    color: #ffffff;
  }
}
</style>