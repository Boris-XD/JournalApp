import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials("tesr"));

        const result = await signInWithGoogle();

        if (!result.ok)
            dispatch(logout( result.errorMessage ));

        dispatch(login(
            {
                uid: result.uid,
                email: result.email,
                displayName: result.displayName,
                photoURL: result.photoURL
            }));
    }
}
