<template>
  <div id="app">
    <h1>Malwin's<br />Geburtstags-Quiz</h1>
    <router-view />
  </div>
</template>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap");

html,
body {
  margin: 0;
  padding: 0;
}

html {
  background: #f5e7d9;
}

#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  //padding: 42px 60px;
  margin: 0;
  padding: 42px 50px;
  width: calc(100vw - 100px);
  height: calc(100vh - 84px);
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  margin: 0;
  padding: 0;
}

input {
  display: block;
  background: #f2efef;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 66%;
  height: 60px;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin-top: 48px;

  &:focus,
  &:active {
    border: 2px solid rgba(0, 0, 0, 0.8);
    outline: none;
  }
}
</style>
