import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../logo.svg';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

export function Footer() {
  return (

      <footer position="static" style={{backgroundColor:'rgb(7 21 37)'}}>
    <Toolbar  style={{ minHeight:'58px', justifyContent:'space-between',}} className='subfooter'>
         <Link to="/"><img src={logo} alt="logo"/></Link>
          <Menu/>
        </Toolbar>
    
      </footer>
  );
}
