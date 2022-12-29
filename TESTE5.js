const botoesApertados = ['A1', 'A2', 'E', 'A1', 'A2', 'A2', 'A1', 'A1', 'A2'] //provavelmente ira mudar de valor

let andarAT = []
let andarND = []

for (let item of botoesApertados) {
  if (item[1] === '2') andarAT.push(item)
}

for (let item of botoesApertados) {
  if (item[1] === '1') andarND.push(item)
}
if (andarND.length > andarAT.length) {
  console.log('NERD')
} else if (andarAT.length > andarND.length) {
  console.log('ATLETA')
}
if (andarAT.length == andarND.length) {
  console.log('DIVERSIFICADO')
}
