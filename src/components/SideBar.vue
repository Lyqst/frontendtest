<template>
  <div class="sidebar">
    <div class="title">Selected squares</div>
    <div class="list">
      <span
        v-for="(square, index) in this.selectedList"
        @mouseover="setHoverSquare(square)"
        @mouseleave="setHoverSquare(0)"
        >{{ index + 1 + ". " + square }}</span
      >
    </div>
    <div class="footer">
      <span>Made by <b>Lyqst</b></span>
      <ThemeSwitch></ThemeSwitch>
      <button @click="this.$store.dispatch('reset')">Reset</button>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";

export default {
  components: { ThemeSwitch },
  emits: ["setHoverSquare"],
  computed: {
    selectedList() {
      return this.$store.state.selectedList;
    },
    hoverSquare() {
      return this.$store.state.hoverSquare;
    },
  },
  methods: {
    setHoverSquare(square) {
      const hoverSquare = square
        ? square.charCodeAt(0) - 96 + (8 - parseInt(square.charAt(1))) * 8
        : 0;
      this.$store.commit("setHoverSquare", hoverSquare);
    },
  },
  watch: {
    selectedList: {
      handler() {
        const list = document.getElementsByClassName("list")[0];
        console.log(list);
        list.scrollTop = list.scrollHeight;
      },
      deep: true,
      flush: "post",
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: relative;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  max-height: calc(var(--chessboard-size) - 3em);
}
.sidebar > * {
  box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
}
.title {
  font-size: var(--fs-lg);
  background-color: var(--background-color);
  color: var(--foreground-color);
}
.list {
  flex-grow: 1;
  display: grid;
  overflow: scroll;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(6.5ch, 1fr));
  grid-template-rows: repeat(auto-fill, 2ch);
  background-color: var(--sidebar-bg-color);
}
.list > * {
  padding-inline: 0.2em;
  width: fit-content;
  transition: background-color 120ms ease, color 120ms ease;
}
.list > *:last-child {
  background-color: var(--selected-square);
  color: var(--foreground-color);
}
.list span {
  user-select: none;
}
.list span:hover {
  background-color: var(--hover-color);
}
.footer {
  display: flex;
  gap: 0.5em;
  font-size: var(--fs-sm);
  height: 2.5em;
  background-color: var(--background-color);
}
.footer button {
  border-radius: 0;
  background-color: var(--foreground-color);
  color: var(--background-color);
  border: none;
  padding-inline: 0.5em;
  cursor: pointer;
  height: 2.2rem;
}
@media (hover: hover) {
  .footer button:hover {
    background-color: var(--sidebar-bg-color);
    color: var(--foreground-color);
  }
}
.footer span {
  flex-grow: 1;
  gap: 0.25em;
  display: flex;
  place-items: center;
}
</style>
