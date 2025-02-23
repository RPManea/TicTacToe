import { useTicTacToeBase } from "./useTicTacToeBase";

export function useTicTacToe() {
  const {
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
  } = useTicTacToeBase();

  const jugar = (filaIndex, casillaIndex) => {
    if (
      tablero.value[filaIndex][casillaIndex] !== "" ||
      ganador.value ||
      empate.value
    ) {
      return;
    }

    tablero.value[filaIndex][casillaIndex] = turno.value;

    if (verificarGanador()) {
      ganador.value = turno.value;
      if (ganador.value === "X") {
        puntosX.value++;
      } else {
        puntosO.value++;
      }
    } else if (verificarEmpate()) {
      empate.value = true;
    } else {
      turno.value = turno.value === "X" ? "O" : "X";
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
