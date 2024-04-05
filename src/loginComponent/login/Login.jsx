import React, { useContext, useState } from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../FireBase_utils/Utils'
import { UserContext } from '../../context/userContext/userContext'
import './Login.css'

const Login = () => {
  
  //using userContext
  const { currentUser,setCurrentUser } = useContext(UserContext);
  //
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    
    setCurrentUser(user)
    
  }

  return (
    <div className=''>
     

      <section class="container py-lg-8 py-5 background-design" data-cue="fadeIn" data-show="true" style={{ animationName: "fadeIn", animationDuration: "600ms", animationTimingFunction: "ease", animationDelay: "0ms", animationDirection: "normal", animationFillMode: "both" }}>
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10 col-12" data-cues="zoomIn" data-group="page-title" data-delay="700" data-disabled="true">
            <div class="text-center d-flex flex-column gap-5 buttonDiv" data-cue="zoomIn" data-group="page-title" data-delay="700" data-show="true" style={{ animationName: "zoomIn", animationDuration: "600ms", animationTimingFunction: "ease", animationDelay: "700ms", animationDirection: "normal", animationFillMode: "both" }}>
              {/* <div class="d-flex justify-content-center">
                <span class="bg-primary bg-opacity-10 text-primary border-primary border p-2 fs-6 rounded-pill lh-1 d-flex align-items-center">
                  <span>Login</span>
                </span>
              </div> */}
              <div class="d-flex flex-column gap-3 mx-lg-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="110vb" height="16vh" fill="currentColor" class="bi bi-mailbox2 text-danger" viewBox="0 0 16 16">
                  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z" />
                  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157" />
                </svg>
                <h1 class="mb-0 display-5 text-danger">Kickstart with your Google Account</h1>
              </div>
              <div class="d-flex flex-row gap-2 justify-content-center ">
                <a  onClick={signInWithGoogle} class="btn btn-danger" target="_blank">
                  Login</a>
                <a href="#demo" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="5vb" height="2vh" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                </svg>Account </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login