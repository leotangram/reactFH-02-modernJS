// Async

// const getImagePromise = () =>
//   new Promise(resolve => resolve('https//asdasdasd.com'))
// getImagePromise().then(console.log)

const getImage = async () => {
  try {
    const apiKey = 'vFZNjEwkQVq9TPbw5gxNjA5zeqxEZmbW'
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await response.json()
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.log(error)
  }
}
getImage()
