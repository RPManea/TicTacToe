import { useTicTacToeBase } from "./useTicTacToeBase";
import { nextTick, ref } from "vue";

export function useTicTacToeIA() {
  const {
    tablero,
    turno,
    ganador,
    empate,
    puntosX,
    puntosO,
    verificarGanador,
    verificarEmpate,
    reiniciarJuego: reiniciarJuegoBase,
    reiniciarMarcador,
  } = useTicTacToeBase();

  const jugadorEmpieza = ref(true);

  const evaluar = () => {
    if (verificarGanador()) return turno.value === "X" ? 10 : -10;
    if (verificarEmpate()) return 0;
    return null;
  };

  const encontrarMejorMovimiento = (simbolo) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tablero.value[i][j] === "") {
          tablero.value[i][j] = simbolo;
          if (verificarGanador()) {
            tablero.value[i][j] = "";
            return { i, j };
          }
          tablero.value[i][j] = "";
        }
      }
    }
    return null;
  };

  const minimax = (esMaximizador, profundidad, alpha, beta) => {
    let puntuacion = evaluar();
    if (puntuacion !== null || profundidad === 0) return puntuacion;
    if (tablero.value.flat().every((casilla) => casilla !== "")) return 0;

    if (esMaximizador) {
      let mejorPuntuacion = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (tablero.value[i][j] === "") {
            tablero.value[i][j] = "X";
            mejorPuntuacion = Math.max(
              mejorPuntuacion,
              minimax(false, profundidad - 1, alpha, beta)
            );
            tablero.value[i][j] = "";
            alpha = Math.max(alpha, mejorPuntuacion);
            if (beta <= alpha) break;
          }
        }
      }
      return mejorPuntuacion;
    } else {
      let peorPuntuacion = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (tablero.value[i][j] === "") {
            tablero.value[i][j] = "O";
            peorPuntuacion = Math.min(
              peorPuntuacion,
              minimax(true, profundidad - 1, alpha, beta)
            );
            tablero.value[i][j] = "";
            beta = Math.min(beta, peorPuntuacion);
            if (beta <= alpha) break;
          }
        }
      }
      return peorPuntuacion;
    }
  };

  const jugarIA = async () => {
    await nextTick();

    const tiempoDeEspera = Math.floor(Math.random() * (600 - 200 + 1)) + 200;
    setTimeout(() => {
      const simboloIA = jugadorEmpieza.value ? "O" : "X";
      const simboloJugador = jugadorEmpieza.value ? "X" : "O";

      let mejorMovimiento =
        encontrarMejorMovimiento(simboloIA) ||
        encontrarMejorMovimiento(simboloJugador);

      if (!mejorMovimiento) {
        let mejorPuntuacion = -Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (tablero.value[i][j] === "") {
              tablero.value[i][j] = simboloIA;
              let puntuacion = minimax(false, 4, -Infinity, Infinity);
              tablero.value[i][j] = "";
              if (puntuacion > mejorPuntuacion) {
                mejorPuntuacion = puntuacion;
                mejorMovimiento = { i, j };
              }
            }
          }
        }
      }

      if (mejorMovimiento) {
        tablero.value[mejorMovimiento.i][mejorMovimiento.j] = simboloIA;
      }

      if (verificarGanador()) {
        ganador.value = simboloIA;

        if (simboloIA === (jugadorEmpieza.value ? "O" : "X")) {
          puntosO.value++;
        } else {
          puntosX.value++;
        }
      } else if (verificarEmpate()) {
        empate.value = true;
      } else {
        turno.value = simboloJugador;
      }
    }, tiempoDeEspera);
  };

  const jugar = (filaIndex, casillaIndex) => {
    const simboloJugador = jugadorEmpieza.value ? "X" : "O";

    if (
      tablero.value[filaIndex][casillaIndex] !== "" ||
      ganador.value ||
      empate.value ||
      turno.value !== simboloJugador
    ) {
      return;
    }

    tablero.value[filaIndex][casillaIndex] = simboloJugador;

    if (verificarGanador()) {
      ganador.value = simboloJugador;

      if (simboloJugador === (jugadorEmpieza.value ? "X" : "O")) {
        puntosX.value++;
      } else {
        puntosO.value++;
      }
    } else if (verificarEmpate()) {
      empate.value = true;
    } else {
      turno.value = jugadorEmpieza.value ? "O" : "X";
      jugarIA();
    }
  };

  const reiniciarJuego = () => {
    reiniciarJuegoBase();
    jugadorEmpieza.value = !jugadorEmpieza.value;
    turno.value = "X";

    if (!jugadorEmpieza.value) {
      jugarIA();
    }
  };

  return {
    tablero,
    turno,
    ganador,
    empate,
    puntosX,
    puntosO,
    jugar,
    reiniciarJuego,
    reiniciarMarcador,
  };
}
