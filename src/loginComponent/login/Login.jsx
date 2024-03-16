import React, { useContext, useState } from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../FireBase_utils/Utils'
import { UserContext } from '../../context/userContext/userContext'

const Login = () => {
  //using userContext
  // const { setCurrentUser } = useContext(UserContext);
  //
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);

    // setCurrentUser(user)
  }

  return (
    <div>
      Login
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Login