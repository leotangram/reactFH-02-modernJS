// Literal Objects

const person = {
  name: 'Tony',
  surname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 13423423,
    lat: 14.32443,
    lng: 34.93434
  }
}

const person2 = { ...person }
person2.name = 'Peter'
console.log(person)

console.log(person2)
