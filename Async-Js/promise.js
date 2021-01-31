const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({text:"hi"})
    },2000)
})

promise.then(text => {
    console.log(text)
})