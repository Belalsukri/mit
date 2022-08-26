export const addBlog = (title, dec,url,  productImg) => {
    return new Promise((resolve, reject) => {
        const fd = new FormData()
        fd.append('title', title)
        fd.append('url', url)
        fd.append('dec', dec)
       
            fd.append('productImg' , productImg[0])
        
        

        fetch('/addBlog', {
            method: 'POST',
            body: fd
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not send the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export const allBlogerPost=()=>{
    return new Promise((resolve, reject)=>{
     fetch('/getallbloger',{
         method:'GET',
         headers:{
            'Content-Type':'application/json'
        },
     }).then(response => {
        if (response.status === 200) {
            response.json().then(data => {
               
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }else{
            reject(new Error('can not send data to server. response number is :'+response.status))
        }
    }).catch(error => {
        reject(error)
    })
})
    }

    export const deletePost=(blogerId)=>{
        
        return new Promise((resolve, reject)=>{

            const sendData={
                blogerId,
            }
            fetch('/deletebloger',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(recivedData => {
                       
                        resolve(recivedData)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
    
        })
        
    }

    export const getBlogPost=(blogerId) => {
        return new Promise((resolve, reject) => {
            const data = {
                id: blogerId
            }
            fetch('/getbloger', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(new Error('can not get the data, response number is: ' + response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })
    }

    export const updateBlog=(title, textarea, url,imgs,oldImgss,blogId)=>{
        return new Promise((resolve, reject) => {
            const fd = new FormData()
            fd.append('newtitle', title)
            fd.append('newtextarea', textarea)
            fd.append('newurl', url)
            
            for (let i = 0; i < imgs.length; i++) {
                fd.append('newImgs' + i, imgs[i])
            }
            const oldImgsll=oldImgss
            const oldImgs = []
            oldImgsll.forEach(img => {
                oldImgs.push(img.src)
               
            })
            fd.append('oldImgs',JSON.stringify(oldImgs))
            fd.append('blogId', blogId)
            fetch('/updateBlog', {
                method: 'POST',
                body: fd
            }).then(response => {
                if(response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(new Error('can not get the data, response number is: ' + response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })
        }

        export const editBlogrePost = (title, description,urlBlog, OldImgs, newImgs, blogid) => {
            return new Promise((resolve, reject) => {
                const fd = new FormData()
                
                fd.append('newblogTitle', title)
                fd.append('newDescription', description)
                fd.append('newblogurl', urlBlog)
                fd.append('oldImgsUrls',JSON.stringify(OldImgs))
                for (let i = 0; i < newImgs.length; i++) {
                    fd.append('newblogImg' + i, newImgs[i])
                }
                fd.append('blogid', blogid)
                
                fetch('/editbloger', {
                    method: 'POST',
                    body: fd
                }).then(response => {
                    if(response.status === 200) {
                        response.json().then(data => {
                            resolve(data)
                        }).catch(error => {
                            reject(error)
                        })
                    } else {
                        reject(new Error('can not get the data, response number is: ' + response.status))
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }
        /////////// Erfolg  ////////////////
        export const AddErfolg = (title, dec,productImg) => {
            return new Promise((resolve, reject) => {
                const fd = new FormData()
                fd.append('title', title)
                fd.append('dec', dec)
               
                    fd.append('productImg' , productImg[0])
                
                
        
                fetch('/AddErfolg', {
                    method: 'POST',
                    body: fd
                }).then(response => {
                    if (response.status === 200) {
                        response.json().then(data => {
                            console.log(data);
                            resolve(data)
                        }).catch(error => {
                            reject(error)
                        })
                    } else {
                        reject(new Error('can not send the data, response number is: ' + response.status))
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }

        export const allErfolgPost=()=>{
            return new Promise((resolve, reject)=>{
             fetch('/getallErfolg',{
                 method:'GET',
                 headers:{
                    'Content-Type':'application/json;charset=utf-8'
                },
             }).then(response => {
               
                    response.json().then(data => {
                       
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
              
            }).catch(error => {
                reject(error)
            })
        })
            }

            /////////////////////////
     export const getErfolgPost=(blogerId) => {
        return new Promise((resolve, reject) => {
            const data = {
                id: blogerId
            }
            fetch('/getErfolg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
                }).then(response => {
                    if (response.status === 200) {
                            response.json().then(data => {
                                resolve(data)
                            }).catch(error => {
                                reject(error)
                            })
                        } else {
                            reject(new Error('can not get the data, response number is: ' + response.status))
                        }
                    }).catch(error => {
                        reject(error)
                    })
                })
            }                 

            ////////////////////////
            export const editErfolgPost = (title, description, OldImgs, newImgs, blogid) => {
                return new Promise((resolve, reject) => {
                    const fd = new FormData()
                    
                    fd.append('newblogTitle', title)
                    fd.append('newDescription', description)
                    fd.append('oldImgsUrls',JSON.stringify(OldImgs))
                    for (let i = 0; i < newImgs.length; i++) {
                        fd.append('newblogImg' + i, newImgs[i])
                    }
                    fd.append('blogid', blogid)
                    
                    fetch('/editErfolg', {
                        method: 'POST',
                        body: fd
                    }).then(response => {
                        if(response.status === 200) {
                            response.json().then(data => {
                                resolve(data)
                            }).catch(error => {
                                reject(error)
                            })
                        } else {
                            reject(new Error('can not get the data, response number is: ' + response.status))
                        }
                    }).catch(error => {
                        reject(error)
                    })
                })
            }

    /////////////////
    export const deleteErfolg=(blogerId)=>{
        
        return new Promise((resolve, reject)=>{

            const sendData={
                blogerId,
            }
            fetch('/deleteerfolg',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(recivedData => {
                       
                        resolve(recivedData)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
    
        })
        
    }

    export const senderPost = (name, email,message) => {
        const sendData={
            name,
            email,
            message
        }
        return new Promise((resolve, reject) => {
            fetch('/sendEmail',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. Response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })   
    }
    //////////////////////////////
    export const AddImgs = (productImg) => {
        return new Promise((resolve, reject) => {
            const fd = new FormData()
                // fd.append('productImg' , productImg[0])
                for (let i = 0; i < productImg.length; i++) {
                    fd.append('productImg' + i, productImg[i])
                }
            fetch('/addimg', {
                method: 'POST',
                body: fd
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        console.log(data);
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(new Error('can not send the data, response number is: ' + response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })
    }
    
    ////////////////////////////////
    export const getAllImg=()=>{
        return new Promise((resolve, reject)=>{
         fetch('/getAllImg',{
             method:'GET',
             headers:{
                'Content-Type':'application/json'
            },
         }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                   
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
        }

        /////////////////////////deleteimg
        export const deleteimg=(blogerId)=>{
        
            return new Promise((resolve, reject)=>{
    
                const sendData={
                    blogerId,
                }
                fetch('/deleteimg',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(sendData)
                }).then(response => {
                    if (response.status === 200) {
                        response.json().then(recivedData => {
                           
                            resolve(recivedData)
                        }).catch(error => {
                            reject(error)
                        })
                    }else{
                        reject(new Error('can not send data to server. response number is :'+response.status))
                    }
                }).catch(error => {
                    reject(error)
                })
        
            })
            
        }