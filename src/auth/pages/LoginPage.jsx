import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { logout } from "../../store/auth/authSlice";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: 'chester@google.com',
    password: '123456789'
  });

  const isAuthenticating = useMemo(() => status == 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword(formState));

    console.log({ email, password });
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    console.log('google...')
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid
              display={ !!errorMessage ? '' : 'none'}
              item
              xs={12}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
               disabled = { isAuthenticating }
               type="submit"
               variant="contained"
               fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled = { isAuthenticating }
                onClick={ onGoogleSignIn }
                variant="contained"
                fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              to="/auth/register"
            >
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
