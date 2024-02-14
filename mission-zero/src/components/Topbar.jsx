import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import style from "./Topbar.module.css"
import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function Topbar() {

  const routes = [
    {
      title: "  Home",
      Icon: BiHomeAlt2,
    },
    {
      title: " Explore",
      Icon: FiSearch,
    },
    {
      title: " Pricing",
      Icon: IoPricetagsOutline,
    },
  ];

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Explore', 'Pricing', 'Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div className={style.containerTopBar}>
        <div className={style.userPicContainer}>
          <img className={style.userPic} src="./cat-image-1.jpg" alt="user image" />
        </div>
      <div className={style.userName}>
      Welcome, User123
      </div>
      
      <div className={style.menu}>
        <ul className={style.menuList}>
            {routes.map((route) => {
              const { Icon, title } = route;
              return (
                <li className={style.menuItems}>
                    <Icon />
                    {title}
                </li>
              );
            })}
          </ul>
          <button className={style.menuLogin}>
            Login
          </button>

      <div className={style.mobileResize}>
      {['X'].map((anchor) => (
        
        <React.Fragment key={anchor}>
          
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))}
    </div>
      
        </div>
    </div>

  )
}
export default Topbar