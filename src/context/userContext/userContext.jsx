import { createContext, useState, React, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../../FireBase_utils/Utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const values = { currentUser, setCurrentUser }

    // signOutUser();
    useEffect(() => {
      const unSubscribe =   onAuthStateChangedListener((user) => {
        console.log(user)
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unSubscribe;
    }, [])
    return (
        <UserContext.Provider value={values} >{children}</UserContext.Provider>
    )
}