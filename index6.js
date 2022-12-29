const notas = [10, 9, 7, 8, 5, 2, 3, 4]

let notasred = 0

for (let item of notas) {
  if (item < 7) {
    //notasred = notasred +1
    //notas red += 1
    notasred++
  }
}
console.log(notasred)
