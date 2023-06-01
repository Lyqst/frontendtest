<template>
  <div class="container">
    <div class="chessboard-container">
      <ChessBoard></ChessBoard>
    </div>
    <div class="sidebar-container">
      <SideBar></SideBar>
    </div>
  </div>
</template>

<script>
import ChessBoard from "./components/ChessBoard.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: { ChessBoard, SideBar },
  mounted() {
    this.$store.dispatch("initTheme");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
  padding: var(--chessboard-padding);
  place-content: center;
  min-height: calc(100dvh - var(--chessboard-padding) * 2);
  max-width: 75rem;
  margin-inline: auto;
}
.sidebar-container {
  margin-inline: auto;
  flex-grow: 1;
  min-height: 30dvh;
  max-height: var(--chessboard-size);
}
.chessboard-container {
  margin-inline: auto;
}
@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
  }
  .sidebar-container {
    min-height: 30dvh;
    width: var(--chessboard-size);
  }
}
</style>
