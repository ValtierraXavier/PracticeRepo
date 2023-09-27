import productsAPI from "./productsAPI";

export const getImages = async () =>{
    try{
        return(
            await productsAPI.get('/')
        )
    }catch(error){
        console.log(error.message)
    }
}

export const getImage = async(id)=>{
    try{        
        return(   
            await productsAPI.get(`/${id}`) 
        )
    }catch(error){
        console.log(error.message)
    }
}

export const postImage = async (body)=>{
    try{
        return(
            await productsAPI.post(`/add`,body)
        )
    }catch(error){
        console.clear(error.message)
    }
}

export const editImage = async (id , body)=>{
    try{
        return(
            await productsAPI.put(`/edit/${id}`, body)
        )
    }catch(error){
        console.log(error.message)
    }
}

export const deleteImage = async(id)=>{
    try{
        return(
            await productsAPI.delete(`/delete/${id}`)
        )
    }catch(error){
        console.log(error.message)
    }
}