const request = require('postman-request')


request({url, json:true} ,(error, response) => {
    console.log(response.body.main.humidity)
})