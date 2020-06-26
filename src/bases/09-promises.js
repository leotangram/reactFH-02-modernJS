// Promises
import { getHeroeById } from './bases/08-import-export'

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroeById(2)
//     resolve(hero)
//     // reject('No se pudo encontrar el héroe')
//   }, 2000)
// })

// promise
//   .then(hero => {
//     console.log('Heroe', hero)
//   })
//   .catch(err => console.warn(err))

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id)
      if (hero) {
        resolve(hero)
      } else {
        reject('No se pudo encontrar el héroe')
      }
    }, 2000)
  })
}

getHeroeByIdAsync(4).then(console.log).catch(console.warn)
