<template>
  <div id="app">
    <v-app>
      <v-main>
        <GlobalNavbar></GlobalNavbar>
        <router-view color="grey" />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import GlobalNavbar from "./components/GlobalNavbar.vue";
export default {
  components: { GlobalNavbar },
};
</script>
<style lang="scss"></style>
