import usersAPI from "./userAPI.js";

export const getUsers = async () =>{
    try{
        return(
            await usersAPI.get('/')
        )
    }catch(error){
        console.log(error.message)
    }
}

export const getUser = async(id)=>{
    try{        
        return(   
            await usersAPI.get(`/${id}`) 
        )
    }catch(error){
        console.log(error.message)
    }
}

export const userSignin = async(body)=>{
    try{
        return(
            await usersAPI.post(`/signin`, body)
        )
    }catch(error){
        console.log(error.message)
    }
}

export const userSignup = async(body)=>{
    try{
        return(
            await usersAPI.post(`/signup`, body)
        )
    }catch(error){
        console.log(error.message)
    }
}

export const updateUser = async (id , body)=>{
    try{
        return(
            await usersAPI.put(`/edit/${id}`, body)
        )
    }catch(error){
        console.log(error.message)
    }
}

export const deleteUser = async(id)=>{
    try{
        return(
            await usersAPI.delete(`/delete/${id}`)
        )
    }catch(error){
        console.log(error.message)
    }
}