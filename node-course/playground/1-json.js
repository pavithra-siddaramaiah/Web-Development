const fs = require('fs')
// const book = {
//     title: "Hello World",
//     author: "abc"
// }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// // console.log(dataBuffer.toString())
// const data = dataBuffer.toString()
// console.log(JSON.parse(data).title)

const parsedData = fs.readFileSync('1-json.json')
const data = JSON.parse(parsedData.toString())
console.log(data)
data.name = "pavithra"
data.age = 25
const updatedData = JSON.stringify(data)
fs.writeFileSync('1-json.json', updatedData)
console.log(fs.readFileSync('1-json.json').toString())