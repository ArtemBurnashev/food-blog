import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../logo.svg';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} 
    style = {{
      position:'fixed', 
      width:"100%", 
      top:'0',
      left:'0',
      right:'0',
      zIndex:'1000'
      }}>

      <AppBar position="static" style={{backgroundColor:'rgba(6, 17, 30, .95)'}}>
    <Toolbar  style={{ minHeight:'58px', justifyContent:'space-between'}}>
         <Link to="/"><img src={logo} alt="logo" /></Link>
          <Menu/>

          <Link to = '/login' className='link' style={{color:'#fff'}}><Button color="inherit" size="small" variant="outlined">Login</Button></Link>
        </Toolbar>
    
      </AppBar>
    </Box>
  );
}
