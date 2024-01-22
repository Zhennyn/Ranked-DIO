function calcularSaldoVitorias(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  var saldoVitorias = vitorias - derrotas;

  // Determina o nível do jogador
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna o saldo de vitórias e o nível
  return { saldoVitorias, nivel };
}

// Variáveis
var vitorias = 100;
var derrotas = 50;

// Calcula o saldo de vitórias e o nível
var resultado = calcularSaldoVitorias(vitorias, derrotas);

// Exibe a saída
console.log(
  "O Herói tem de saldo de **" +
    resultado.saldoVitorias +
    "** está no nível de **" +
    resultado.nivel +
    "**",
);
