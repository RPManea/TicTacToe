<script setup>
import { RouterLink } from "vue-router";

defineProps({
  reiniciarJuego: Function,
});
</script>

<template>
  <div class="button-container">
    <button class="game-btn" @click="reiniciarJuego">🔄 Reiniciar</button>
    <RouterLink to="/" class="game-btn">🏠 Volver al inicio</RouterLink>
  </div>
</template>

<style scoped>
/* Contenedor de botones */
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

/* Botones generales */
.game-btn {
  background: transparent;
  border: 2px solid #8bc3ff;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Press Start 2P";
  color: #8bc3ff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  text-align: center;
  max-width: 300px;
}

.game-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #8bc3ff, 0 0 30px #8bc3ff;
}
/* Responsividad */
@media (max-width: 1200px) {
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    order: 2;
  }
}
</style>
