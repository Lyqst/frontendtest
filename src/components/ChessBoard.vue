<template>
  <div class="board">
    <ChessboardSquare
      v-for="n in 64"
      :squareId="n"
      @click="this.$store.dispatch('selectSquare', n)"
    ></ChessboardSquare>
  </div>
</template>

<script>
import ChessboardSquare from "../components/ChessboardSquare.vue";

export default {
  components: { ChessboardSquare },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: var(--chessboard-size);
  width: var(--chessboard-size);
  box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.1);
}
</style>
