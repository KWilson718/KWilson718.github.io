<script setup>
import HeaderComp from './components/HeaderComp.vue'
import MainContentBumper from './components/MainContentBumper.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <HeaderComp/>
  <MainContentBumper/>
  <router-view></router-view>
  <FooterComp/>
</template>

<style scoped>
  .navbar{
    position: fixed;
    top: 0;
    width: 100%;
  }
  .content{
    padding-top: 4.5rem;
  }
</style>
