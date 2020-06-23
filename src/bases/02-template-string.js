// Template String

const name = 'Leo'
const surname = 'Omaña'

const completeName = `
${name} 
${surname}
${1 + 1}
`
console.log(completeName)
function getSaludo(name) {
  return `Hola ${name}`
}

console.log(`Este es un texto: ${getSaludo(name)}`)
