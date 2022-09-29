const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: process.env.SERVIC,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
})

  function getMessageContact(email,name, messageUsr,callback) {  
    const mailOption ={
        from: email,
        to: 'papawswh@gmail.com',
        subject: name,
        text:   messageUsr
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            callback(false);   
        } else {
            console.log('imail sent ........');
            callback(true);
        }
    })
  }


  module.exports = { 
    getMessageContact
}