const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'robotcarnode@gmail.com',
        pass: 'zdhxtterqtktjccy'
    }
})

  function getMessageContact(email,name, messageUsr,callback) {  
    const mailOption ={
        from: email,
        to: 'robotcarnode@gmail.com',
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