import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/Utils'

const Login = () => {
const signInWithGoogle = async ()=>{
  const {user} = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
}

  return (
    <div>Login


      <button onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Login