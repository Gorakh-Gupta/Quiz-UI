import React from 'react'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
// import { CatchingPokemon } from '@mui/icons-material'
import Icon from '@mui/material/Icon';
import { useState } from 'react';
import { Height, KeyboardArrowDown } from '@mui/icons-material';
export const Navbar = () => {

  const [anchorEl, setAnchoEl] = useState(null)
  const open = Boolean(anchorEl)
  const handlerClick = (event) => {
    setAnchoEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchoEl(null)
  }
  return (
    <>
      <AppBar position='static' >
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            {/* <CatchingPokemon /> */}
            <Icon>add_circle</Icon>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            QuizApp
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Signup</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit' id='admin-button' onClick={handlerClick} aria-controls={open ? 'admin-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}


            >Admin</Button>
          </Stack>
          <Menu id='admin-menu' anchorEl={anchorEl} open={open}
            MenuListProps={{
              'aria-labelledby': 'admin-button'
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}>
            <MenuItem onClick={handleClose}>Signup</MenuItem>
            <MenuItem onClick={handleClose}> SignIn</MenuItem>
          </Menu>
        </Toolbar>

      </AppBar>
      <img style={{ height: '89vh' ,width: "100%" } } src='quiz-page-cover.png' />
    </>
  )
}
