import { initializeApp } from 'firebase/app'; //help us to add instance to online firebase console
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';


import {
    getFirestore,  // instance to get firestore
    doc,  // get data base 
    getDoc,  // getting the data from database
    setDoc  // setting the data to firestore
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDzYskhxs56sM6_DJlXJCeAiENWHx0xr2k",
    authDomain: "dashboarddb-d8a0c.firebaseapp.com",
    projectId: "dashboarddb-d8a0c",
    storageBucket: "dashboarddb-d8a0c.appspot.com",
    messagingSenderId: "954542256093",
    appId: "1:954542256093:web:f39b2ebd8b78d3daa3d034",
    measurementId: "G-BTP9H781M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();   //creating a variable to use googleauthprovider class


//setting custom parameters
provider.setCustomParameters({
    'prompt': "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//go to firebase console and go to authentication enable google 


//Setting up fireStore database

// get the firestore db instance into a variable
export const db = getFirestore();


//creating a document in db using auth uid async function and getting data as snapshot
export const createUserDocumentFromAuth = async (userAuth) => {


    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)
    //snapshort will give user data will give false if empty using exists method
    const userSnapshort = await getDoc(userDocRef);
    console.log(userSnapshort);
    console.log(userSnapshort.exists());


    if (!userSnapshort.exists()) { //if user does not exist create one
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    //if user exist then just return doc
    return userDocRef;


}


//signout method from firebase

export const signOutUser = async ()=>  await signOut(auth);

//observer

export const onAuthStateChangedListener = (callback)=>{onAuthStateChanged(auth, callback)};
