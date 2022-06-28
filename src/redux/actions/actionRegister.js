import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { google } from "../../Firebase/firebaseConfig";
import { typesLogin } from "../types/types"


// LOGIN

export const LoginAsync = (email, pass) => {
    return (dispatch)=> {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user})=>{
            console.log("user authorized, welcome to BuffaloApp");
            dispatch(LoginSync(email, pass))
        })
        .catch((error)=>{
            console.warn(error, "User is not authorized");
        })
    }
}


export const LoginSync = (email, pass) => {
    return{
        type:typesLogin.login,
        payload: {
            email, pass
        }
    }
}

//     GOOGLE

export const GoogleLogin = ()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            console.log(user, "user authorized");
            dispatch(registerUserSync(user.displayName, user.email))
        })
        .catch((error)=>{
            console.warn(error);
        })
    }
}


//      REGISTRAR USUARIO NUEVO

export const registerUserAsync = (nombre, email, phone, pass) =>{
    return (dispatch)=>{
        const auth = getAuth()
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async ({user}) => {
                await updateProfile(auth.currentUser,{displayName: nombre})

            dispatch(registerUserSync(nombre,email,phone,pass))
                console.log(user, 'Registered user successfully');
        }
        )
        .catch(error => console.log(error))
    }
}

export const registerUserSync = (nombre, email, phone, pass) =>{
    return{
        type: typesLogin.register,
        payload: {
            nombre,email,phone,pass
        }
    }
}