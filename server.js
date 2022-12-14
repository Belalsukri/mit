const express = require('express')
const path = require('path');
const fileupload = require('express-fileupload')
const dataModule = require('./modules/mongosData')
const emailSender = require('./modules/emailSender');
const { log } = require('console');

const port = process.env.PORT || 5000
const app =express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(fileupload({
    useTempFiles : false , 
    // tempFileDir : '/ tmp /' ,
    limits: { fileSize: 50 * 1024 * 1024 }
}))
app.post('/addBlog', (req, res) => {
    if (req.files) {
    const title = req.body.title
    const dec = req.body.dec
    const url = req.body.url 
    const imgs =[]
    for(const key in req.files){
        if (req.files[key].mimetype !='application/pdf') {
            imgs.push(req.files[key])   
        }
    }
        dataModule.addProduct(title, dec,url,imgs).then(() => {
            res.json(1)
        }).catch(error => {
            if (error == 3) {
                res.json(3)
            }else{
                res.json(4)
            }
        })
    } else {
        res.json(2)
    }
})
///////////////////
app.post('/addErfolg', (req, res) => {
      if (req.files) {
      const title = req.body.title
      const dec = req.body.dec 
      const imgs =[]
      for(const key in req.files){
          if (req.files[key].mimetype !='application/pdf') {
              imgs.push(req.files[key])
               
          }
      } 
          dataModule.addErfolg(title, dec,imgs).then(() => {
              res.json(1)
          }).catch(error => {
              if (error == 3) {
                  res.json(3)
              }else{
                  res.json(4)
              }
          })
      } else {
          res.json(2)
      }
      
})
///////////////////
app.post('/addimg', (req, res) => {
          if (req.files) {
          const imgs =[]
          for(const key in req.files){
              if (req.files[key].mimetype !='application/pdf') {
                  imgs.push(req.files[key]) 
              }
          }
              dataModule.addimg(imgs).then(() => {
                  res.json(1)
              }).catch(error => {
                  if (error == 3) {
                      res.json(3)
                  }else{
                      res.json(4)
                  }
              })
          } else {
              res.json(2)
          }
})
          
app.get('/getAllImg',(req,res)=>{
              dataModule.getAllImg().then(bloger => {
                  res.json(bloger)
              }).catch(error => {
                  res.json(error)
              })
})
          //////////////////deleteimg
app.post('/deleteimg', (req, res) => {
              const blogerId = req.body.blogerId
              dataModule.deleteimg(blogerId).then(() => {
                  res.json(1)
              }).catch(error => {
                  res.json(2)
              })
})
          //////////////////////
app.get('/getallbloger',(req,res)=>{
      dataModule.getAllProducts().then(bloger => {
          res.json(bloger)
      }).catch(error => {
          res.json(error)
      })
})
////////////////////////////
app.get('/getallErfolg',(req,res)=>{
      dataModule.getAllErfolg().then(bloger => {
          res.json(bloger)
      }).catch(error => {
          res.json(error)
      })
})
  ///////////////////////////////
app.post('/deletebloger', (req, res) => {
      const blogerId = req.body.blogerId
      dataModule.deleteProduct(blogerId).then(() => {
          res.json(1)
      }).catch(error => {
          res.json(2)
      })
})
  ///////////////////////////
app.put('/getbloger', (req, res) => {
    const blogerId = req.body.id
    dataModule.getProduct(blogerId).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
});
///////////////
app.post('/getErfolg', (req, res) => {
      const blogerId = req.body.id
      dataModule.getErfolg(blogerId).then(data => {
          res.json(data)
      }).catch(error => {
          res.json(2)
      })
});
/////////////////////////
app.post('/editbloger', (req, res) => {
  const {newblogTitle, newDescription,newblogurl,oldImgsUrls,newblogImg,blogid} = req.body
  let newImgs = []
  if (req.files){
      for (const key in req.files) {
          if (req.files[key].mimetype != 'application/pdf') {
              newImgs.push(req.files[key]) 
          }
      }
  }
  let oldImgsUrlsArr =  JSON.parse(oldImgsUrls)
  oldImgsUrlsArr = oldImgsUrlsArr.map(element => {
      return element.substr(element.indexOf('/uplodeFiles/'))
  })
  dataModule.updateProduct(newblogTitle, newDescription,newblogurl,oldImgsUrlsArr,newImgs,blogid ).then((blog) => {
res.json(1)
  }).catch(error => {
res.json(error)
  })
})
//////////////////////////////////////////////
app.post('/editErfolg', (req, res) => {
  const {newblogTitle, newDescription,oldImgsUrls,newblogImg,blogid} = req.body
  let newImgs = []
  if (req.files){
      for (const key in req.files) {
          if (req.files[key].mimetype != 'application/pdf') {
              newImgs.push(req.files[key]) 
          }
      }
  }
  let oldImgsUrlsArr =  JSON.parse(oldImgsUrls)
  oldImgsUrlsArr = oldImgsUrlsArr.map(element => {
      return element.substr(element.indexOf('/uplodeFiles/'))
  })
  dataModule.updateErfolg(newblogTitle, newDescription,oldImgsUrlsArr,newImgs,blogid ).then((blog) => {
res.json(1)
  }).catch(error => {
res.json(2)
  })
})
/////////////////
app.post('/deleteerfolg', (req, res) => {
  const blogerId = req.body.blogerId
  dataModule.deleteerfolg(blogerId).then(() => {
      res.json(1)
  }).catch(error => {
      res.json(2)
  })
})

///////////////sendEmail//////////////
app.post('/sendEmail', (req, res) => {   
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  
  console.log(name ,email,message);
      //dataModule.senderContact(name, email, subject, message).then(() => {
          if (name && email && message){
              //dataModule.senderContact(name, email, subject, message).then(() => {
                  
                  emailSender.getMessageContact(email,'Von:'+ name+'\n' ,'name:'+ name+'\n'+'email:'+' '+email+'\n'+'message'+'\n' + message, (ok) => {
                      if (ok) {
                          res.json(1)
                      } else {
                          res.json(3)
                      }
                  })
          } else {
                  res.json(2)
              }  
      });

app.use(express.static(path.join(__dirname ,'client','build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname ,'client','build','index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
