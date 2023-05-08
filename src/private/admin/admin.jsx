import { Route, Routes } from "react-router-dom";
import "./admin.css"
import { useState } from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Admin = () => {
  const theme = createTheme();
  const [token,setToken]=useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return <>
  {
   token ? <div className="admin">
    <div className="container">
        <h1>admin page</h1>
    </div>
  </div>
  :
  // <div className="login-inner">
  //       <h3 className="login__title lg:text-title text-dark font-serif font-semibold text-center">Вход</h3>
  //     <form className="login__form">
  //     <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
  //     E-mail
  //         <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"} placeholder={"example@gmail.com"} required={true}/>
  //       </label>
  //       <label htmlFor="password" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
  //       Пароль
  //         <CustomInput className="w-full deliver__user__input mt-2" id={"password"} type={"password"} placeholder={"jock1323"} required={true}/>
  //       </label>
  //       <Button className="w-full mt-9" onClick={()=>setToken(true)}>Войти</Button>
  //     </form>
  //     </div>
  <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>setToken(true)}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
}
    </>
}
 
export default Admin;