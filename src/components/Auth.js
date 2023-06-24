import {auth,googleProvider} from "../config/firebase";
import {signInWithPopup,signOut} from "firebase/auth";

export const signInWithGoogle = async () =>{
    try{
        await signInWithPopup(auth,googleProvider);
    }catch(err){
        console.error(err);
    }
};

export const logOut = async () =>{
    try{
        await signOut(auth);
    }catch(err){
        console.log(err);
    }
};