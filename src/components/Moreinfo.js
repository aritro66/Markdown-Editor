import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Moreinfo(){
    return(
        <>
         <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto' ,marginBottom: "30px"}} id="Overview">
        <Typography variant="h4" gutterBottom component="div">
          Want to Learn More?
        </Typography>
        <Typography variant="body2" gutterBottom>
          <a href="https://github.com/mattcone/markdown-guide"><GitHubIcon style={{fontSize:"16px"}}/>GitHub Repository</a>
        </Typography>
      </Box>
        </>
    );
}