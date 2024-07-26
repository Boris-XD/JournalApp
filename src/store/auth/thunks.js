import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (result.ok){
            dispatch(login(
                {
                    uid: result.uid,
                    email: result.email,
                    displayName: result.displayName,
                    photoURL: result.photoURL
                }));
        } else {
            dispatch(logout( result.errorMessage ));
        }

    }
}

export const startCreatingUserWithEmailPässword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (ok)
        {
            return dispatch(login({ uid, displayName, email, photoURL }));
        } else {
            return dispatch(logout(errorMessage));
        }
    }
}

export const startLoginWithEmailPassword = ( { email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailPassword( email, password );

        if (ok)
        {
            return dispatch(login({ uid, displayName, email, photoURL }));
        } else {
            console.log(errorMessage);
            return dispatch(logout(errorMessage));
        }
    }
}