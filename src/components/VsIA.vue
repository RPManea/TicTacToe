<script setup>
import { useTicTacToeIA } from "@/composables/useTicTacToeIA";
import Tablero from "@/components/Tablero.vue";
import Marcador from "@/components/Marcador.vue";
import BotonesJuego from "@/components/BotonesJuego.vue";
import MensajeResultado from "@/components/MensajeResultado.vue";

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
} = useTicTacToeIA();
</script>

<template>
  <div class="container text-center mt-4">
    <div class="game-wrapper">
      <!-- Marcador -->
      <Marcador
        :puntosX="puntosX"
        :puntosO="puntosO"
        :turno="turno"
        :esVsIA="true"
        :reiniciarMarcador="reiniciarMarcador"
      />

      <!-- Tablero de juego -->
      <Tablero :tablero="tablero" :jugar="jugar" />

      <!-- Contenedor de botones -->
      <BotonesJuego :reiniciar-juego="reiniciarJuego" />

      <!-- Mensaje de ganador o empate -->
      <MensajeResultado :ganador="ganador" :empate="empate" />
    </div>
  </div>
</template>

<style scoped>
/* Contenedor del juego */
.game-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
}

/* Responsividad */
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
