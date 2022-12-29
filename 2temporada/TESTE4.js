let nota1 = 901
let nota2 = 1000
let nota3 = (nota1 + nota2) / 2
let check = (nota1 - nota2) * [-1]
if (check > 101 || check == 101 || check < -101 || check == -101) {
  console.log('TERCEIRO CORRETOR DEVE SER CHAMADO')
} else {
  console.log(nota3)
}
