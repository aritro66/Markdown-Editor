import './App.css';
import Box from '@mui/material/Box';
import React from 'react';
import Editor from './components/Editor';
import Basic_syntax from './components/Basic_syntax';
import Moreinfo from './components/Moreinfo';
import Heading from './components/Heading';


function App() {

 

  return (<>
    <Heading />
    
      <Box style={{width: "100%"}}>
        <Editor />
        <Basic_syntax />
        <Moreinfo />
      </Box>
     

  </>
  );
}

export default App;
