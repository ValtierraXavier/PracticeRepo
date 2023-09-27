import React, {useState, useContext} from "react";
import './SigninForm.css'
import { userSignin } from "../../Services/userServices.js";
import AuthContext from "../../context/AuthProvider";

export default function SigninForm(){
    const {setAuth} = useContext(AuthContext)
    const[credentials, setCedentials] = useState(
        {
            email: "",
            password: ""
        }
    )
    // console.log(credentials)

    const handleChange =(e)=>{
        const feild = e.target.name
        const val = e.target.value
        setCedentials(prev => ({
            ...credentials,
            [feild]: val
        }))
    }

    const signin =async(e)=>{
        e.preventDefault()
        try{
            const sendCredentials = await userSignin({credentials})
            sendCredentials.status===201?
            console.log(sendCredentials.data)
            :
            sendCredentials.status===200?
                sendCredentials.data.status===401?
                    console.log(sendCredentials.data.message)
                :
                    sendCredentials.data.status===404?
                    console.log(sendCredentials.data.message)
                :
                    console.log('Uhoh. Something went wrong.')
            :
            console.log('Uhoh. Something went wrong.')

        }catch(error){console.log(error.message)}
    }

    return(
        <div className="signin">
            <form className="signinForm signupSignin" onSubmit={signin} >
                <h3>Sign In</h3>
                <label className="inputLabel" htmlFor="email" >Email</label>
                <input className="signinInput signupInput" type='email' name='email' id='email' onChange={handleChange} value={credentials.email}/>
                <label className="inputLabel" htmlFor="password">Password</label>
                <input className="signinInput signupInput" type='password' name='password' id='password' onChange={handleChange} value={credentials.password}/>
                <input className="signinInput" type='submit'></input>    
            </form>
            <p className='signupLink' >Don't have an account?<a href='/signup'> Sign Up</a></p>
        </div>
    )
}