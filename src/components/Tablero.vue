<script setup>
defineProps({
  tablero: Array,
  jugar: Function,
});
</script>

<template>
  <!-- Tablero -->
  <div class="board mt-5">
    <div
      v-for="(fila, filaIndex) in tablero"
      :key="filaIndex"
      class="d-flex justify-content-center"
    >
      <div
        v-for="(casilla, casillaIndex) in fila"
        :key="casillaIndex"
        class="square"
        :data-symbol="casilla"
        @click="jugar(filaIndex, casillaIndex)"
      >
        {{ casilla }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tablero */
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
/* Casillas */
.square {
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: 4px solid #004e99;
  border-radius: 15px;
  box-shadow: 0 0 15px #004e99, 0 0 30px #004e99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
  background: rgba(0, 0, 0, 0.5);
}

/* Estilo para "X" y "O" */
.square[data-symbol="X"] {
  color: #ff3b3b;
  text-shadow: 0 0 10px #ff3b3b, 0 0 20px #ff3b3b;
}

.square[data-symbol="O"] {
  color: #00ffcc;
  text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
}

/* Responsividad */
@media (max-width: 1200px) {
  .square {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
}
</style>
