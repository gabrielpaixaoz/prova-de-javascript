const media = 40
const frequencia = 74
const projetoFinal = 85

if (media >= 60 && frequencia >= 75 && projetoFinal > 0) {
  console.log('APROVADO')
} else if (media <= 59 && frequencia >= 75 && projetoFinal >= 85) {
  console.log('APROVADO')
} else {
  console.log('REPROVADO')
}
