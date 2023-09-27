import React from "react";
import { getImages, postImage } from '../../../Services/productServices.js';
import {useEffect, useState} from 'react'

export default function Homepage(){
    const[dataUrl, setDataUrl] = useState(null)
    const[fileData, setFileData]=useState(null)
    const[description, setDescription]=useState('')
    const[allImages, setAllImages]=useState(null)

  const createURL =(e)=>{
    const file = e.target.files[0]
    setFileData(prev => prev = file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', ()=>{
      setDataUrl(prev => prev = reader.result)
    })
  }

  const getAllImages = async()=>{
    try{
      const everything = await getImages()
      if(everything.status === 200){
        setAllImages(prev => prev = everything.data)
      }else{
        window.alert('Uh-Oh. Couldnt Fetch Images')
      }
    }catch(error){console.log(error.message)}

  }

  const handlePostimage=async(e)=>{
    e.preventDefault()
    const newPost = {
      imgName: fileData.name,
      description: description,
      image: dataUrl
    }
    try{
      const sendPost = await postImage({newPost})
      if(sendPost.status === 200){
        getAllImages()
      }
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getAllImages()
  },[])

    return(
        <div className="Homepage">
            <p>{fileData?fileData.name:'Hi'}</p>
            <form id = 'postImageForm' onSubmit={handlePostimage}>
                <img id= "previewImg" width='150px' height='150px' src={dataUrl} alt='preview' ></img>
                <input type ='file' id='fileInput' onChange={createURL}></input>
                <input type ='text' id='descriptionInput' onChange={(e)=>setDescription(prev => prev = e.target.value)} value={description} placeholder='Description'></input>
                <input type ='submit' id = 'submitButton'></input>
            </form>
            <div id='allPosts'>
            {allImages?
                allImages.map((element, index)=>{
                    return(
                        <div id ='post' key={`post${index}`}>
                            <img id='postImg' key={`pI${index}`} src={element.image} alt={element.description}width='200px'></img>
                            <p id ='imgName' key={`iN${index}`}>{element.imgName}</p>
                            <p id='descriptionOutput' key={`dO${index}`} >{element.description}</p>
                        </div>
                    )
                })
            :
                    <h3>Nothing to see here...</h3>
            }
            </div>
        </div>
    )
}