import { useTicTacToeBase } from "@/composables/useTicTacToeBase";

describe("useTicTacToeBase", () => {
  it("Los elementos deben inicializar el estado correctamente", () => {
    const { tablero, turno, ganador, empate, puntosX, puntosO } =
      useTicTacToeBase();

    // Verificamos que el tablero es una matriz 3x3 vacía
    expect(tablero.value).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    // El turno inicial debe ser "X"
    expect(turno.value).toBe("X");

    // No debe haber ganador ni empate al inicio
    expect(ganador.value).toBe(null);
    expect(empate.value).toBe(false);

    // Los puntos deben iniciar en 0
    expect(puntosX.value).toBe(0);
    expect(puntosO.value).toBe(0);
  });

  it("El juego/tablero debe reiniciar correctamente", () => {
    const { tablero, turno, ganador, empate, reiniciarJuego } =
      useTicTacToeBase();

    // Simulamos una partida
    tablero.value = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "X", "O"],
    ];
    turno.value = "O";
    ganador.value = "X";
    empate.value = false;

    reiniciarJuego();

    // Verificamos que el tablero se haya limpiado
    expect(tablero.value).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    // El turno debe volver a ser "X"
    expect(turno.value).toBe("X");
    // No debe haber ganador ni empate
    expect(ganador.value).toBe(null);
    expect(empate.value).toBe(false);
  });

  it("debe detectar correctamente al ganador", () => {
    const { tablero, verificarGanador, ganador } = useTicTacToeBase();

    // Simulamos que "X" gana con una fila completa
    tablero.value = [
      ["X", "X", "X"],
      ["", "", ""],
      ["", "", ""],
    ];

    // Si hay un ganador, lo actualizamos manualmente
    if (verificarGanador()) {
      ganador.value = "X";
    }

    expect(verificarGanador()).toBe(true);
    expect(ganador.value).toBe("X");

    // Reseteamos el valor del ganador para hacer mas pruebas
    ganador.value = null;

    tablero.value = [
      ["O", "", ""],
      ["", "O", ""],
      ["", "", "O"],
    ];

    if (verificarGanador()) {
      ganador.value = "O";
    }

    expect(verificarGanador()).toBe(true);
    expect(ganador.value).toBe("O");

    ganador.value = null;

    tablero.value = [
      ["", "X", ""],
      ["", "X", ""],
      ["", "X", ""],
    ];

    if (verificarGanador()) {
      ganador.value = "X";
    }

    expect(verificarGanador()).toBe(true);
    expect(ganador.value).toBe("X");

    ganador.value = null;
  });

  it("debe detectar correctamente un empate", () => {
    const { tablero, verificarEmpate, empate } = useTicTacToeBase();

    // Simulamos un empate
    tablero.value = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ];

    if (verificarEmpate()) {
      empate.value = true;
    }

    expect(verificarEmpate()).toBe(true);
    expect(empate.value).toBe(true);

    // Reseteamos empate para las siguientes pruebas
    empate.value = false;

    // Caso donde todavía hay espacios vacíos (no debería ser empate)
    tablero.value = [
      ["X", "O", "X"],
      ["O", "", "O"],
      ["O", "X", "O"],
    ];

    if (verificarEmpate()) {
      empate.value = true;
    }

    expect(verificarEmpate()).toBe(false);
    expect(empate.value).toBe(false);
  });

  it("El marcador se debe reiniciar correctamente", () => {
    const { puntosX, puntosO, reiniciarMarcador } = useTicTacToeBase();

    puntosX.value = 5;
    puntosO.value = 3;

    reiniciarMarcador();

    expect(puntosX.value).toBe(0);
    expect(puntosO.value).toBe(0);
  });
});
