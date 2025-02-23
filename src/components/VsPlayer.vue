<script setup>
import { useTicTacToe } from "@/composables/useTicTacToe";
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
  .game-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
