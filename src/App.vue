<template>
  <div id="app">
    <v-app>
      <v-main>
        <NavbarVue></NavbarVue>
        <router-view color="grey" />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import NavbarVue from "./components/Navbar.vue";
export default {
  components: { NavbarVue },
};
</script>
<style lang="scss"></style>
