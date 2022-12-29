const botoesApertados = ['A1', 'A2', 'E', 'A1', 'A2', 'A2', 'A1', 'A1', 'A2'] //provavelmente ira mudar de valor

let andarAT = []
let andarND = []

for (let item of botoesApertados) {
  if (item[1] === '2') andarAT.push(item)
}

for (let item of botoesApertados) {
  if (item[1] === '1') andarND.push(item)
}
console.log(andarAT)
