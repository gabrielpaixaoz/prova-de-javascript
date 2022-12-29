const entrada = [3, 3, 1]
const jogador1 = entrada[0]
const jogador2 = entrada[1]
const palpite = entrada[2]

if (jogador1 === jogador2) {
  console.log('PALPITE INVALIDO ')
} else if (jogador1 > 6 || jogador2 > 6) {
  console.log('ABSURDO')
} else if (jogador1 === palpite) {
  console.log('JOGADOR 1 GANHOU')
} else if (jogador2 === palpite) {
  console.log('JOGADOR 2 GANHOU')
} else if (jogador1 && jogador2 != palpite) {
  console.log('EMPATE')
}
