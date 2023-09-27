import React from "react";

export default function Nav(){

    return(
        <div className="Nav">
            <a className="navLink" href="/homepage">Home</a>
            <a className="navLink" href="/signin">Sign In</a>
            <a className="navLink"href="/signup">Sign Up</a>
        </div>
    )
}