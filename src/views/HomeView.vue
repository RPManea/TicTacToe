<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- Contenedor principal con Bootstrap -->
  <div class="container text-center mt-5 position-relative">
    <!-- Botones "VS Jugador" y "VS IA" -->
    <div class="row justify-content-center mt-4">
      <div class="col">
        <RouterLink to="/vsplayer" class="btn btn-lg-custom btn-block"
          >VS Jugador</RouterLink
        >
      </div>
      <div class="col">
        <RouterLink to="/vsia" class="btn btn-lg-custom btn-block"
          >VS IA</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.futuristic-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px #004e99, 0 0 20px #004e99;
}

.btn-lg-custom {
  font-family: "Press Start 2P";
  color: #ffffff;
  font-weight: bold;
  background-color: #004e99;
  margin-top: 40%;
  font-size: 1.4rem;
  padding: 15px 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px #004e99, 0 0 20px #004e99;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-align: center;
  min-width: 250px;
  min-height: 80px;
}
.btn-lg-custom:hover {
  transform: scale(1.1); /* Aumenta el tamaño ligeramente al pasar el mouse */
  box-shadow: 0 0 15px #007bff, 0 0 30px #007bff; /* Efecto de brillo más intenso */
}

@media (max-width: 768px) {
  .btn-lg-custom {
    width: 100%; /* En pantallas pequeñas, los botones ocuparán el 100% del ancho */
  }

  .futuristic-title {
    font-size: 2rem; /* Reduce el tamaño del título en móviles */
  }
}
</style>
