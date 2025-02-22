<script setup>
defineProps({
  puntosX: Number,
  puntosO: Number,
  turno: String,
  esVsIA: Boolean,
  reiniciarMarcador: Function,
});
</script>

<template>
  <div class="scoreboard">
    <h2>Marcador</h2>
    <p v-if="esVsIA">IA: {{ puntosO }}</p>
    <p v-if="esVsIA">TÚ: {{ puntosX }}</p>
    <p v-if="!esVsIA">X: {{ puntosX }}</p>
    <p v-if="!esVsIA">O: {{ puntosO }}</p>
    <p>Turno actual: {{ turno }}</p>
    <button @click="reiniciarMarcador">Reiniciar marcador</button>
  </div>
</template>

<style scoped>
/*Marcador */
.scoreboard {
  font-family: "Press Start 2P", cursive;
  color: #8bc3ff;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px #8bc3ff, 0 0 30px #8bc3ff;
  min-width: 200px;

  /*Posicionarlo a la izquierda */
  position: absolute;
  left: -20px;
  top: 40%;
  transform: translateY(-40%);
}

/* Estilo del botón */
button {
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #ff5555;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #ff3333;
}

@media (max-width: 1200px) {
  .scoreboard {
    position: static; /* Elimina el posicionamiento absoluto */
    transform: none;
    margin-top: 20px; /*  Se mueve debajo de los botones */
    order: 3; /*  Se coloca después de los botones */
  }
}
</style>
