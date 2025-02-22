import { ref } from "vue";

export function useTicTacToeBase() {
  // Estado del juego
  const tablero = ref([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const turno = ref("X");
  const ganador = ref(null);
  const empate = ref(false);
  const puntosX = ref(0);
  const puntosO = ref(0);

  // Combinaciones ganadoras
  const combinacionesGanadoras = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // Filas
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], // Columnas
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ], // Diagonales
  ];
  // Verifica si hay un ganador
  const verificarGanador = () => {
    return combinacionesGanadoras.some((combinacion) => {
      const [a, b, c] = combinacion;
      return (
        tablero.value[a[0]][a[1]] !== "" &&
        tablero.value[a[0]][a[1]] === tablero.value[b[0]][b[1]] &&
        tablero.value[a[0]][a[1]] === tablero.value[c[0]][c[1]]
      );
    });
  };

  // Verifica si hay empate
  const verificarEmpate = () => {
    return tablero.value.flat().every((casilla) => casilla !== "");
  };

  // Reinicia el juego
  const reiniciarJuego = () => {
    tablero.value = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    turno.value = "X";
    ganador.value = null;
    empate.value = false;
  };

  //Reiniciar marcador
  const reiniciarMarcador = () => {
    puntosX.value = 0;
    puntosO.value = 0;
  };
  return {
    tablero,
    turno,
    ganador,
    empate,
    puntosX,
    puntosO,
    verificarGanador,
    verificarEmpate,
    reiniciarJuego,
    reiniciarMarcador,
  };
}
