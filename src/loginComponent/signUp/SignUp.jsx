import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Utils';

const SignUp = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup(); 
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            SIGNUP PAGE
            <button onClick = { logGoogleUser } > Sign Up</button>
        </div>
    )
}

export default SignUp