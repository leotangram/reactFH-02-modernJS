// Objects Destructuring
// Asignación desestructurante

const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
  range: 'Soldado'
}

// const { name: name2, age, key } = person

// console.log(name2)
// console.log(age)
// console.log(key)

const useContext = ({ name, age, key, range = 'Capitán' }) => {
  // console.log(name, age, range)
  return {
    keyName: key,
    years: age,
    latlng: {
      lat: 14.1234,
      lng: -12.3245
    }
  }
}

const {
  keyName,
  years,
  latlng: { lat, lng }
} = useContext(person)
console.log(keyName, years)
console.log(lat, lng)
