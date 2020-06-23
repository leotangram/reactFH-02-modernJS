// Functions

// function greeting(name) {
//   return `Hola, ${name}`
// }

const greeting = function (name) {
  return `Hola, ${name}`
}

const greeting2 = name => {
  return `Hola, ${name}`
}

const greeting3 = name => `Hola, ${name}`
const greeting4 = () => `Hola`

console.log(greeting('Goku'))
console.log(greeting2('Vegeta'))
console.log(greeting3('Krilin'))
console.log(greeting4('Krilin'))

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_papi_123'
})

const user = getUser()
console.log(user)

function getActiveUser(name) {
  return {
    uid: 'ABC657',
    username: name
  }
}
const activeUser = getActiveUser('Leo')
console.log(activeUser)

const getActiveUser2 = name => ({
  uid: 'ABC657',
  username: name
})
const activeUser2 = getActiveUser2('Leo')
console.log(activeUser2)
