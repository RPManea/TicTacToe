<script setup>
defineProps({
  ganador: String,
  empate: Boolean,
});
</script>

<template>
  <!-- Mensaje de ganador o empate -->
  <div v-if="ganador || empate" class="message-overlay">
    <div class="winner-message" v-if="ganador">
      🎉 ¡El jugador {{ ganador }} ha ganado! 🎉
    </div>
    <div class="draw-message" v-else-if="empate">
      🤝 ¡Empate! Nadie ha ganado. 🤝
    </div>
  </div>
</template>

<style scoped>
/* Mensaje de ganador/empate */
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

/* Efecto de brillo */
@keyframes glow {
  from {
    text-shadow: 0 0 10px #8bc3ff, 0 0 20px #8bc3ff;
  }
  to {
    text-shadow: 0 0 20px #8bc3ff, 0 0 40px #8bc3ff;
  }
}

/* Responsividad */
@media (max-width: 1200px) {
  .winner-message,
  .draw-message {
    font-size: 1.5rem;
  }
}
</style>
