<template>
  <div class="home">
    <h1 class="red yellow--text text--lighten-4">Home</h1>
    <h1 class="display-4">Massive font</h1>
    <p class="headline">This is a headline</p>
    <p class="title font-weight-bold text-uppercase">title</p>
    <v-btn class="pink white--text mr-4">Button</v-btn>
    <v-btn color="pink mr-4" depressed>Button</v-btn>
    <v-btn plain color="pink">Plain Button</v-btn>
    <v-btn text color="pink">Text Button</v-btn>
    <v-btn depressed>
      <v-icon left>mdi-email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn large depressed>
      <span>Email me</span>
      <v-icon right>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed dark color="pink">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'TextAndButtons',
}
</script>
