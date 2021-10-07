import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './Markdown-mark.png'

export default function Heading() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"black",position:"static"}}>
        <Toolbar>
            <img src={logo} style={{height:"25px",width:"25px",margin:"5px"}} ></img>  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Markdown Editor
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}