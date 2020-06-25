// Array destructuring

const characters = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = characters
console.log(p3)

const returnArray = () => ['ABC', 123]

const [letters, number] = returnArray()
console.log(letters, number)

const useState = value => {
  return [
    value,
    () => {
      console.log('Hola mundo')
    }
  ]
}
const [name, setName] = useState('Goku')
console.log(name)
setName()
