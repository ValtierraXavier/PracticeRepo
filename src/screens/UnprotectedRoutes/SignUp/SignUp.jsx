import React from "react";
import "./SignUp.css";
import SignupForm from "../../../components/SignupForm/SignupForm.jsx";

export default function SignUp(){
    return(
        <div className="SignUp">
            <section className="signupFormDiv">                
                <SignupForm/>
            </section>
        </div>
    )
}