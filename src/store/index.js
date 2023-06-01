import { createStore } from "vuex";

export default createStore({
  state: () => ({
    theme: "light",
    selectedSquare: 0,
    selectedList: [],
    hoverSquare: 0,
  }),
  mutations: {
    setTheme(state, status) {
      state.theme = status;
    },
    clearSelectedList(state) {
      state.selectedList = [];
    },
    addToSelectedList(state, value) {
      state.selectedList.push(value);
    },
    setHoverSquare(state, value) {
      state.hoverSquare = value;
    },
    setSelectedSquare(state, value) {
      state.selectedSquare = value;
    },
  },
  actions: {
    initTheme({ commit, state }) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        commit("setTheme", "dark");
      const theme = localStorage.getItem("theme");
      if (theme) commit("setTheme", theme);
      document.documentElement.className = state.theme + "-theme";
    },
    switchTheme({ commit, state }) {
      commit("setTheme", state.theme == "light" ? "dark" : "light");
      localStorage.setItem("theme", state.theme);
      document.documentElement.className = state.theme + "-theme";
    },
    selectSquare({ commit }, value) {
      commit("setSelectedSquare", value);
      const squareNotation =
        String.fromCharCode(97 + ((value - 1) % 8)) +
        (8 - Math.floor((value - 1) / 8));
      commit("addToSelectedList", squareNotation);
    },
    reset({ commit }) {
      commit("clearSelectedList");
      commit("setSelectedSquare", 0);
    },
  },
});
