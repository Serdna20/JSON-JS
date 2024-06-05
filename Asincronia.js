// function sayHello(n) {
//     console.log("Saludo", n)
// }
// function sayHelloDelay() {
//     setTimeout(function () {
//         console.log("Saludo demorado")
//     }, 500)
// }

// sayHello(1)
// sayHelloDelay()
// sayHello(2)

// function sumar(acumulado, valor) {
//     // let total
//     // setTimeout(function() {
//     //     total = acumulado+valor
//     // }, 200)
//     return acumulado+valor // total
// }

// acumuladoo = sumar(acumuladoo, 2)
// acumuladoo = sumar(acumuladoo, 2)

// function sumar(acumulado, valor, callback) {
//     let total = acumulado+valor

//     setTimeout(function () {
//         total = acumulado+valor
//         callback(total)
//     }, 1000)
    
//     // callback(total)
// }

// let acumulado = 0

// // Ese acumulado es parametro
// sumar(0, 2, function(acumulado) {
//     sumar(acumulado, 5, function(acumulado) {
//         console.log(acumulado)
//     })
// })

// let acumulado = 0

// function sumarPromise(acumulado, valor) {
//     return new Promise(function(resolve, reject){
//         if (valor === 5) return reject("I have fives")
//         // Return para que lo de abajo no se ejecute
//         const total = acumulado + valor
//         resolve(total)
//     })
// }

// sumarPromise(acumulado, 2).then(function(n){
//     return sumarPromise(n, 5)
// })
// .then(function(n) {
//     console.log(n)
// })
// .catch(function(error) {
//     console.log(error)
// })

// async function sumarPromise(acumulado, valor) {
//     return new Promise(function(resolve, reject){
//         if (valor === 5) return reject("I have fives")
//         // Return para que lo de abajo no se ejecute
//         const total = acumulado + valor
//         resolve(total)
//     })
// }

// async function main() {
//     try {
//         let total = await sumarPromise(0, 2)
//         total = await sumarPromise(total, 5)
//         console.log(total)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

// main()


// Método usando thens sin async-await
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json.title))

console.log("Json")

// Esto de aqui se sigue ejecutando a pesar de que el Json de abajo ya lo haya hecho
async function getData() {
    
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const dataJson = await data.json()
    console.log(dataJson.title)
    
}
getData()

console.log("Json2")