<template>
  <div>
    <slot
        :res="response"
        :loading="loading"
    ></slot>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://google.com",
    },
  },
  data() {
    return {
      response: "",
      loading: false,
    };
  },
  computed: {
    really() {
      return this.ab;
    },
  },
  mounted(url) {
    this.loading = true;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.response = res;
        this.loading = false;
      });
  },
};
</script>
<style lang=""></style>
