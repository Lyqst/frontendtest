<template>
  <div class="switch" :class="{ dark: isDark }" @click="switchTheme">
    <v-icon name="hi-solid-sun"></v-icon>
    <v-icon name="hi-solid-moon"></v-icon>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.theme === "dark";
    },
  },
  methods: {
    switchTheme() {
      this.$store.dispatch("switchTheme");
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: flex;
  place-content: space-between;
  place-items: center;
  padding-inline: 0.5rem;
  height: 2.2rem;
  width: 3.3rem;
  background-color: var(--foreground-color);
  cursor: pointer;
}
.switch:hover {
  background-color: var(--sidebar-bg-color);
  color: var(--foreground-color);
}
.switch > * {
  z-index: 2;
  inherits: color;
  transition: color 150ms ease;
}
.switch > *:first-child {
  color: var(--foreground-color);
}
.switch > *:last-child {
  color: var(--background-color);
}
.switch.dark > *:first-child {
  color: var(--background-color);
}
.switch.dark > *:last-child {
  color: var(--foreground-color);
}
.switch::before {
  content: "";
  position: absolute;
  left: 0.2rem;
  z-index: 0;
  height: 1.75rem;
  width: 1.75rem;
  background-color: var(--background-color);
  transition: transform 150ms ease;
}
.switch.dark::before {
  transform: translateX(2.1rem);
}
</style>
