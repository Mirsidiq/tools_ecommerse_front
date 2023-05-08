import { Route, Routes } from "react-router-dom";
import "./admin.css"
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Users from "../users/users";
import { NavLink } from "react-router-dom";
import AllOrders from "../allOrders/allOrders";

const pages = ['users', 'orders', 'products','categories'];
const Admin = () => {
  const theme = createTheme();
  const [token,setToken]=useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
    <nav className="admin__nav w-full bg-light py-3">
     <div className="container">
     <ul className="admin__nav__list">
        <li className="admin__nav__item">
          <NavLink to={"admin/users"} className="admin__nav__link text-dark text-normal font-serif font-medium">Users</NavLink>
          <NavLink to={"admin/orders"} className="admin__nav__link text-dark text-normal font-serif font-medium ms-4">Orders</NavLink>
          <NavLink to={"admin/products"} className="admin__nav__link text-dark text-normal font-serif font-medium ms-4">Product</NavLink>
          <NavLink to={"admin/categories"} className="admin__nav__link text-dark text-normal font-serif font-medium ms-4">Categories</NavLink>
        </li>
      </ul>
     </div>
    </nav>
    <Routes>
      <Route element={<Users/>} path="admin/users"/>
      <Route element={<AllOrders/>} path="admin/orders"/>
    </Routes>
  </div>
  :
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