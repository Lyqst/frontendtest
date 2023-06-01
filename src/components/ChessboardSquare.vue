<template>
  <div
    class="square"
    :class="{ light: !isDark, dark: isDark, selected: isSelected, hover: isHover }"
  >
    <div v-if="file" class="file-indicator">{{ file }}</div>
    <div v-if="rank" class="rank-indicator">{{ rank }}</div>
  </div>
</template>

<script>
export default {
  props: ["squareId"],
  computed: {
    isDark() {
      return (
        (Math.floor((this.squareId - 1) / 8) % 2 == 0 &&
          this.squareId % 2 == 0) ||
        (Math.floor((this.squareId - 1) / 8) % 2 != 0 && this.squareId % 2 != 0)
      );
    },
    isSelected() {
      return this.squareId == this.$store.state.selectedSquare;
    },
    isHover() {
      return this.squareId == this.$store.state.hoverSquare;
    },
    file() {
      if (this.squareId % 8 == 0) return 9 - this.squareId / 8;
      else return 0;
    },
    rank() {
      if (this.squareId > 56)
        return String.fromCharCode(96 + this.squareId - 56);
      else return 0;
    },
  },
};
</script>

<style scoped>
.square {
  position: relative;
  cursor: pointer;
  transition: background-color 50ms ease-in-out;
}
.square:hover, .square.hover{
 background-color: var(--hover-color);
}
.light {
  background-color: var(--light-color);
}
.light .file-indicator,
.light .rank-indicator {
  color: var(--dark-color);
}
.dark {
  background-color: var(--dark-color);
}
.dark .file-indicator,
.dark .rank-indicator {
  color: var(--light-color);
}
.selected, .selected:hover {
  background-color: var(--selected-square);
}
.file-indicator,
.rank-indicator {
  position: absolute;
  width: fit-content;
  user-select: none;
  opacity: 0.7;
  font-size: var(--fs-sm);
}
.file-indicator {
  top: 0.2em;
  right: 0.4em;
}
.rank-indicator {
  bottom: 0.2em;
  left: 0.4em;
}
</style>
