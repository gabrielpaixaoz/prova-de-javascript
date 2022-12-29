const idade = 25
const cart = false
const adlt = idade >= 18 && idade <= 60

if (idade < 18 || idade > 60 || (adlt && cart)) {
  console.log('MEIA')
} else {
  console.log('INTEIRA')
}
