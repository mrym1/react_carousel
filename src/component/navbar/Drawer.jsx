import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@mui/material";

// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
      const [openDrawer, setOpenDrawer] = useState(false);
      return (
        <>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>
             <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/">Home</Link>
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/about">About</Link>
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/contact">Contact</Link>
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/about">Faq</Link>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            {/* <MenuIcon /> */}
          </IconButton>
        </>
      );
    }
    export default DrawerComponent;
    