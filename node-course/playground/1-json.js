const fs = require('fs')
// const book = {
//     title: "Hello World",
//     author: "abc"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
const data = dataBuffer.toString()
console.log(JSON.parse(data).title)
