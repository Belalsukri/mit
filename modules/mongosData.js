const mongoose =require('mongoose')
const fs = require('fs')
const path = require('path');
const dotenv = require('dotenv');
// dotenv.config();
const connectionString="mongodb+srv://belal:0966405529@cluster0.l6boz.mongodb.net/test?retryWrites=true&w=majority"
function connect() {
    
  return new Promise((resolve, reject) => {
      if (mongoose.connection.readyState === 1) {
          resolve()
         
      } else {
          mongoose.connect(connectionString, {
            
                
          }).then(() => {
              resolve()
              console.log('hello mongoose');
          }).catch(error => {
              reject(error)
              console.log(error);
          })
      }
      
  })
}
  ////////////////////////////////////////
  const Schema = mongoose.Schema
  const productSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    urlBlog:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
   
    imgs:{
        type:[String],
        required:true,
        min:1
    },
    date:{
        type:Date,
        required:true
     },
   
})
const Product =mongoose.model('addplog',productSchema)


function addProduct(title, dec,url,imgs) {
    return new Promise((resolve, reject) => {
        connect().then(()=>{
                    const imgsArr = []
                    imgs.forEach((img, idx) => {
                        // get file extension
                          let ext = img.name
                          img.mv('./client/build/uplodeFiles/' + ext)
                          imgsArr.push('/uplodeFiles/' + ext)
                    });
                      const newProduct =new Product({
                        title: title,
                        urlBlog:url,
                        description: dec,
                        imgs: imgsArr,
                        date:Date()
                    })
                    newProduct.save().then(() => {
                              resolve()
                      }).catch(error => {
                        console.log(error.code);
                      })
                
            }).catch(error => {
              reject(error)
            })

    }).catch(error => {
        reject(error)
    })

}
//................................................................

function getAllProducts() {
  return new Promise((resolve, reject) => {
   
      connect().then(() => {
        
          Product.find().sort({"date": -1}).then(blogers => {
             
              blogers.forEach(blog => {
                
                  blog['id'] = blog['_id']
              })
              
              resolve(blogers)
          }).catch(error => {
            
              reject(error)
          })
          })
              
  }).catch(error => {

      reject(error)
  })

}
//.............................

function deleteProduct(blogerId) {
    return new Promise((resolve, reject) => {
        uploadDir = path.join( './client/build');
        Product.findOne({_id: blogerId}).then( bloger=>{

            bloger.imgs.forEach(img => {
                // console.log(img);
                let filePath = uploadDir + img;
                 console.log(filePath);
                //check the img file is exist then delete it
                if (fs.existsSync(filePath)){
                    fs.unlink(filePath,(err)=>{
                        console.log(err);
                    })
                }
                else{
                    console.log('not exist');
                }
            })
                Product.deleteOne({_id: blogerId}).then(() => {
                       
                        resolve()
                    }).catch(error => {
                        
                        reject(error)
                    })
    }).catch(error => {
        reject(error)
    })
    })
    
  }

    // ..................................................................... //
function postProductId(id) {

    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Product.findOne({_id: id}).then(blogerId=>{
                if(blogerId) {
                    blogerId.id = blogerId._id
                resolve(blogerId)
                  console.log('db'+ {blogerId});
            } else {
                reject(new Error('can not find a book with this id : ' + id))
            }
          }).catch(error => {

            reject(error)
        })
          }).catch(error => {

            reject(error)
        })
    })

}

function getProduct(id) {
    return new Promise((resolve, reject) => {
       
        connect().then(() => {
        //     const prodId =postProductId(blogerId)
        // console.log(" prodId",prodId);
           
            Product.findOne({_id: id}).then(blogerId=>{
                if(blogerId) {
                    blogerId.id = blogerId._id
                resolve(blogerId)
                  console.log('db'+ {blogerId});
            } else {
                reject(new Error('can not find a book with this id : ' + id))
            }
          }).catch(error => {

            reject(error)
        })
          }).catch(error => {

            reject(error)
        })
            
            
          
    })

}
// ..................................................................... //
function updateProduct(newblogTitle, newDescription,newblogurl,oldImgsUrlsArr,newImgs,blogId) {
    return new Promise((resolve, reject) => {
    try {
       
        (async()=>{
        let result =await getProduct(blogId)
        oldProductData = result
        const deletedImgs=[]
        const keepImgs=[]
       
        result.imgs.forEach(img =>{
            if (oldImgsUrlsArr.indexOf(img) >= 0) {
                keepImgs.push(img)
            } else {
                deletedImgs.push(img)
            }
        })
        
        ///
        const newImgsUrlsArr=[]
        newImgs.forEach((img, idx) =>{
            const imgExt =img.name.substr(img.name.lastIndexOf('.'))
            console.log(imgExt);
            const newImgName=newblogTitle.trim().replace(/ /g, '_') + '_'+idx +'_'+ imgExt
            newImgsUrlsArr.push('/uplodeFiles/'+newImgName)
            img.mv('./client/build/uplodeFiles/' + newImgName)
        })
        deletedImgs.forEach(file=>{
            console.log(file);
            if (fs.existsSync('./client/build'+file)) {
                fs.unlinkSync('./client/build'+file)
            }
        })

         await Product.updateOne({_id: blogId},{

                title:newblogTitle,
                description:newDescription,
                urlBlog:newblogurl,
                imgs:[...keepImgs, ...newImgsUrlsArr],
                
                $inc:{__v:1}
        })
        getProduct(blogId).then(blog => {
            resolve(blog)
        }).catch(error => {
            reject(error)
        })

        resolve()
       
   
})()
} catch (error) {
    reject(error)
}
})
}

////////....................................
///////// Erfolg//////////////
const ErfolgSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
   date:{
       type:Date,
       required:true
    },
    imgs:{
        type:[String],
        required:true,
        min:1
    }
   
})
const Erfolg =mongoose.model('adderfolg',ErfolgSchema)

function addErfolg(title, dec,imgs) {
    return new Promise((resolve, reject) => {
        connect().then(()=>{
                    const imgsArr = []
                    imgs.forEach((img, idx) => {
                        // get file extension
                          let ext = img.name.substr(img.name.lastIndexOf('.'))
                          // set the new image name
                          let newName = title.trim().replace(/ /g, '_') + '_' + idx + ext
                          img.mv('./client/build/uplodeFiles/' + newName)
                          imgsArr.push('/uplodeFiles/' + newName)
                    });
                      const newProduct =new Erfolg({
                        title: title,
                        description: dec,
                        imgs: imgsArr,
                        date:Date() 
                        
                    })
                    newProduct.save().then(() => {
                        

                              resolve()

                      }).catch(error => {
                        console.log(error.code);

                      })
                
            }).catch(error => {

              reject(error)
            })

    }).catch(error => {
        reject(error)
    })

}
//................................................................
function getAllErfolg() {
    return new Promise((resolve, reject) => {
     
        connect().then(() => {
          
            Erfolg.find().sort({"date": -1}).then(blogers => {
               
                blogers.forEach(blog => {
                  
                    blog['id'] = blog['_id']
                })
                
                resolve(blogers)
            }).catch(error => {
              
                reject(error)
            })
            })
                
    }).catch(error => {
  
        reject(error)
    })
  
  }
  //.............................
  function getErfolg(id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Erfolg.findOne({_id: id}).then(blogerId=>{
                resolve(blogerId)
                //  console.log('db'+ {blogerId});

          }).catch(error => {

            reject(error)
        })
          }).catch(error => {

            reject(error)
        })
    })

}
//////////////////////////.7777777777777777777777
function updateErfolg(newblogTitle, newDescription,oldImgsUrlsArr,newImgs,blogId) {
    return new Promise((resolve, reject) => {
    try {
        (async()=>{
        let result =await getErfolg(blogId)
        oldProductData = result
        const deletedImgs=[]
        const keepImgs=[]
        result.imgs.forEach(img =>{
            if (oldImgsUrlsArr.indexOf(img) >= 0) {
                keepImgs.push(img)
            } else {
                deletedImgs.push(img)
            }
        })
        const newImgsUrlsArr=[]
        newImgs.forEach((img, idx) =>{
            const imgExt =img.name.substr(img.name.lastIndexOf('.'))
            console.log(imgExt);
            const newImgName=newblogTitle.trim().replace(/ /g, '_') + '_'+blogId+'_'+ idx +imgExt
            newImgsUrlsArr.push('/uplodeFiles/'+newImgName)
            img.mv('./client/build/uplodeFiles/' + newImgName)
        })
        deletedImgs.forEach(file=>{
            console.log(file);
            if (fs.existsSync('./client/build'+file)) {
                fs.unlinkSync('../client/build'+file)
            }
        })
         await Erfolg.updateOne({_id: blogId},{
                title:newblogTitle,
                description:newDescription,
                imgs:[...keepImgs, ...newImgsUrlsArr], 
                $inc:{__v:1}
        })
        getProduct(blogId).then(blog => {
            resolve(blog)
        }).catch(error => {
            reject(error)
        })
        resolve()
})()
} catch (error) {
    reject(error)
}
})
}
///////////////////
function deleteerfolg(blogerId) {
    return new Promise((resolve, reject) => {
        uploadDir = path.join( './client/build');
        Erfolg.findOne({_id: blogerId}).then( bloger=>{

            bloger.imgs.forEach(img => {
                // console.log(img);
                let filePath = uploadDir + img;
                // console.log(filePath);
                //check the img file is exist then delete it
                if (fs.existsSync(filePath)){
                    fs.unlink(filePath,(err)=>{
                        console.log(err);
                    })
                }
                else{
                    console.log('not exist');
                }
            })
            Erfolg.deleteOne({_id: blogerId}).then(() => {
                       
                        resolve()
                    }).catch(error => {
                        
                        reject(error)
                    })
    }).catch(error => {
        reject(error)
    })
    })
    
  }

  //////////////////////////
  const ImgSchema = new Schema({

    
   date:{
       type:Date,
       required:true
    },
    imgs:{
        type:[String],
        required:true,
        min:1
    }
   
})
const imghome =mongoose.model('addimg',ImgSchema)
function addimg(imgs) {
    return new Promise((resolve, reject) => {
        connect().then(()=>{
                    const imgsArr = []
                    imgs.forEach((img, idx) => {
                        // get file extension
                          let ext = img.name
                          // set the new image name
                          
                          img.mv('./client/build/uplodeFilesimg/' + ext)
                          imgsArr.push('/uplodeFilesimg/' + ext)
                    });
                      const newProduct =new imghome({
                        imgs: imgsArr,
                        date:Date() ,
                        $inc:+1
                    })
                    newProduct.save().then(() => {
                        

                              resolve()

                      }).catch(error => {
                        console.log(error.code);

                      })
                
            }).catch(error => {

              reject(error)
            })

    }).catch(error => {
        reject(error)
    })

}
//................................................................
//................................................................
function getAllImg() {
    return new Promise((resolve, reject) => {
     
        connect().then(() => {
          
            imghome.find().sort({"date": -1}).then(blogers => {
               
                blogers.forEach(blog => {
                  
                    blog['id'] = blog['_id']
                })
                
                resolve(blogers)
            }).catch(error => {
              
                reject(error)
            })
            })
                
    }).catch(error => {
  
        reject(error)
    })
  
  }
  //.............................deleteimg
  function deleteimg(blogerId) {
    return new Promise((resolve, reject) => {
        uploadDir = path.join( './client/build');
        imghome.findOne({_id: blogerId}).then( bloger=>{

            bloger.imgs.forEach(img => {
                 console.log(img);
                let filePath = uploadDir + img;
                // console.log(filePath);
                //check the img file is exist then delete it
                if (fs.existsSync(filePath)){
                    fs.unlink(filePath,(err)=>{
                        console.log(err);
                    })
                }
                else{
                    console.log('not exist');
                }
            })
            imghome.deleteOne({_id: blogerId}).then(() => {
                       
                        resolve()
                    }).catch(error => {
                        
                        reject(error)
                    })
    }).catch(error => {
        reject(error)
    })
    })
    
  }

  //////////////////////////
module.exports={
    addProduct,
    getAllProducts,
    deleteProduct,
    getProduct,
    updateProduct,
    addErfolg,
    getAllErfolg,
    getErfolg,
    updateErfolg,
    deleteerfolg,
    addimg,
    getAllImg,
    deleteimg,
    postProductId,
}