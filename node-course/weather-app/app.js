const request = require('postman-request')



request({url, json:true} ,(error, response) => {
    // Get it printed in terms of local errors like if network is not connected or any basic errors
    if(error){
        console.log("Check your connection and try again")
    }
    //This is popprd up incase of any mistakes/typo in the url
    else if(response.body.error){
        console.log('check the url and try accessing again')
    }
    //if everything is fine then print the response
    else {
        console.log(response.body.main.humidity)
    }
    
})
