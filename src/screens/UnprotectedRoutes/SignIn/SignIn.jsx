import React from "react";
import './SignIn.css'
import SigninForm from "../../../components/SigninForm/SigninForm.jsx";

export default function SignIn(){
    return(
        <div className="SignIn" >
            <section className="signinFormDiv">                
                <SigninForm/>
            </section>
        </div>
    )
}