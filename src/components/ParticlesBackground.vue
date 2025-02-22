<script setup>
const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <div class="particles-container">
    <vue-particles
      id="tsparticles"
      @particlesLoaded="particlesLoaded"
      :options="{
        preset: 'snow',
        background: {
          color: {
            value: '#000000', // Color de fondo
          },
        },
        particles: {
          color: {
            value: '#004e99', // Color de las partículas
          },
          number: {
            value: 200, // Cantidad de partículas
          },
          opacity: {
            value: 0.8, // Opacidad de la nieve
          },
          size: {
            value: { min: 2, max: 6 }, // Tamaño de la nieve
          },
          move: {
            enable: true, // Habilita el movimiento
            speed: 2, // Velocidad de caída
            direction: 'bottom', // Dirección hacia abajo
            straight: false, // Movimiento en zigzag
            random: false, // Movimiento predecible
            outModes: 'out', // Salen de la pantalla y reaparecen arriba
          },
        },
      }"
    />
  </div>
  <div class="container text-center mt-3 position-relative">
    <h1 class="futuristic-title">
      <i class="fas fa-gamepad"></i> TicTacToe <i class="fas fa-gamepad"></i>
    </h1>
  </div>
</template>

<style scoped>
/* Asegurar que las partículas estén en el fondo */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Envía las partículas detrás de todo */
}

/* Mantener el título en una posición relativa */
.title-container {
  position: relative;
  text-align: center;
  margin-top: 50px;
}
.futuristic-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px #004e99, 0 0 20px #004e99;
}
</style>
