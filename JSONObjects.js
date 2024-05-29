const job = "Teacher"

const data = {
    name: "Juana",
    age: 30,
    job: job,
    active: true,
    hobbies: [
        "Play games",
        "Read books",
        "Sleep"
    ],
    studies: {
        primary: "Argelino",
        school: "Colcaro",
        college: "UFPSO"
    },
    greeting: function() {console.log("Hola tonoto")}
}

// data = 5 - No se puede ejecutar ya que está definido como constante

// delete data.active

// Solo se puede hacer en js
// data.greeting()

// A pesar de que data sea constante lo que se cambia es el valor
// data.name = "Peppa"
// data.lastName = "Pig"

// console.log(data.asd) -> undefined
// console.log(data.asd != undefined)
// console.log(data)
// console.log(data.greeting)
// console.log(data.name, data.lastName)

// for (const key in data) {
//     console.log(key, data[key])
// }

const drinks = '{"ingredients":[{"idIngredient":"552","strIngredient":"Elderflower cordial","strDescription":"Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.","strType":"Cordial","strAlcohol":"No","strABV":null}]}'
const drinksObj = JSON.parse(drinks)
console.log(drinksObj.ingredients[0].idIngredient)

// console.log(JSON.stringify(data))