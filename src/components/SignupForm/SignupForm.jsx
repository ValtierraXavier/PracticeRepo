import React,{useState} from "react";
import './SignupForm.css'
import { userSignup } from "../../Services/userServices.js";

export default function SignupForm(){
    const[newUser, setNewUser]=useState(
            {
                email:'',
                username:'',
                password:''
            }
        )


        const handleChange = (e)=>{
            e.preventDefault()
            setNewUser(prev =>({
                ...newUser,
                [e.target.name]:e.target.value
            }))
        }

        const handleCreateUser = async (e)=>{
            e.preventDefault()
            try{
                const sendNewUser = await userSignup({newUser})
                sendNewUser.status === 201?
                console.log(sendNewUser.data)
                :
                // sendNewUser.status=== 200?
                //     sendNewUser.data.status===401?
                //         console.log(sendNewUser.data.message)
                //     :
                //     sendNewUser.data.status===404?
                //         console.log(sendNewUser.data.message)
                //     :
                //     console.log('Uhoh. Something went wrong')
                // :
                console.log('Uhoh. Something went wrong')


            }catch(error){console.log(error.message)}
        }

    return(
        <div className="SignupForm">
            <form className="signupForm signupSignin" onSubmit={(handleCreateUser)} >
                <h3>Sign Up</h3>
                <label className="inputLabel" htmlFor="email" >Email</label>
                <input className="signinInput signUpInput" type='email' name='email' id='email' onChange={handleChange} value={newUser.email}/>
                <label className="inputLabel" htmlFor="username">Username</label>
                <input className="signinInput signUpInput" type='text' name='username' id='username' onChange={handleChange} value={newUser.username}/>
                <label className="inputLabel" htmlFor="password">Password</label>
                <input className="signinInput signUpInput" type='password' name='password' id='password' onChange={handleChange} value={newUser.password}/>
                <input className="signinInput" type='submit'></input> 
            </form>
            <p className="signinLink">Have an account?<a href='/signin'> Sign In</a></p>
        </div>
    )
}