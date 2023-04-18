import React from 'react'
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore, Folder, FolderOpen, PieChartOutline, StarBorder, Support } from "@mui/icons-material";

const drawerWidth = 240;

const SideBar = () => {
    const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [activeItemDashboard, setActiveItemDashboard] = React.useState('Record');

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <img src='/logo.png' style={{margin: '10px'}} />
        <Typography sx={{ marginLeft: "15px", color: 'gray', letterSpacing: '2px', fontWeight: 400, marginBottom: '15px' }}>DASHBOARD</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
              <PieChartOutline sx={{color: '#474747'}} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Record", "Reports", "Analyse", "Learn"].map((item) => (
                <ListItemButton sx={{ pl: 7, color: `${(activeItemDashboard===item)?'black':'gray'}` }} key={item}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        <Typography sx={{ marginTop: '30px', marginLeft: "15px", color: 'gray', letterSpacing: '2px', fontWeight: 400, marginBottom: '15px' }}>PAGES</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <Support sx={{color: '#474747'}} />
            </ListItemIcon>
            <ListItemText primary="Help Center" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Help Center"].map((item) => (
                <ListItemButton sx={{ pl: 7, color: `${(activeItemDashboard===item)?'black':'gray'}` }} key={item}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick3}>
            <ListItemIcon>
              <FolderOpen sx={{color: '#474747'}} />
            </ListItemIcon>
            <ListItemText primary="File Manager" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["File Manager"].map((item) => (
                <ListItemButton sx={{ pl: 7, color: `${(activeItemDashboard===item)?'black':'gray'}` }} key={item}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        
      </Drawer>
  )
}

export default SideBar