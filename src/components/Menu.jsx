import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const style = {
  width: '100%',
  maxWidth: 360,
  display:'flex',
};

export default function Menu() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders" className='menu'>
      <ListItem>
      <Link to='/' className="menu-link"> <ListItemText primary="Home" /></Link>
      </ListItem>
      <ListItem>
        <Link to = '#'  className="menu-link"><ListItemText primary="Recipes" /></Link>
      </ListItem>
      <ListItem>
      <Link  to = '/blog'  className="menu-link"> <ListItemText primary="Blog" /></Link>
       
      </ListItem>
    </List>
  );
}
