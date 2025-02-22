<script setup>
import { useTicTacToe } from "@/composables/useTicTacToe";
import Tablero from "@/components/Tablero.vue";
import Marcador from "@/components/Marcador.vue";
import BotonesJuego from "@/components/BotonesJuego.vue";

const {
  tablero,
  turno,
  ganador,
  empate,
  puntosX,
  puntosO,
  jugar,
  reiniciarJuego,
  reiniciarMarcador,
} = useTicTacToe();
</script>

<template>
  <div class="container text-center mt-4">
    <div class="game-wrapper">
      <!-- Marcador -->
      <Marcador
        :puntosX="puntosX"
        :puntosO="puntosO"
        :turno="turno"
        :reiniciarMarcador="reiniciarMarcador"
      />

      <!-- Tablero de juego -->
      <Tablero :tablero="tablero" :jugar="jugar" />

      <!-- Contenedor de botones -->
      <BotonesJuego :reiniciar-juego="reiniciarJuego" />

      <!-- Mensaje de ganador o empate -->
      <div v-if="ganador || empate" class="message-overlay">
        <div class="winner-message" v-if="ganador">
          🎉 ¡El jugador {{ ganador }} ha ganado! 🎉
        </div>
        <div class="draw-message" v-else-if="empate">
          🤝 ¡Empate! Nadie ha ganado. 🤝
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 🔹 Contenedor del juego */
.game-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
}

/* 🔹 Mensaje de ganador/empate */
.message-overlay {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #8bc3ff;
  text-shadow: 0 0 10px #8bc3ff, 0 0 20px #8bc3ff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  animation: glow 1.5s infinite alternate;
}

/* .winner-message,
.draw-message {
} */

@keyframes glow {
  from {
    text-shadow: 0 0 10px #8bc3ff, 0 0 20px #8bc3ff;
  }
  to {
    text-shadow: 0 0 20px #8bc3ff, 0 0 40px #8bc3ff;
  }
}

/* 🔹 Responsividad */
@media (max-width: 1200px) {
  .winner-message,
  .draw-message {
    font-size: 1.5rem;
  }

  .game-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
