const imc = [12, 35, 23, 10, 21, 27, 28]
let classeA = []
let classeB = []
let classeC = []

for (let array of imc) {
  if (array < 25) classeA.push(array)
}
for (let array of imc) {
  if (array >= 25 && array <= 29) classeB.push(array)
}
for (let array of imc) {
  if (array > 29) classeC.push(array)
}
console.log(
  classeA.length * 0.16 + classeB.length * 0.31 + classeC.length * 0.59
)
