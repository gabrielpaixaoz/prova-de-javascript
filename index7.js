const nomes = ['ana', 'bia', 'andre']

let nomeca = []

for (let item of nomes) {
  if (item[0] === 'a' || item === 'A') {
    nomeca.push(item)
  }
}
console.log(nomeca)
