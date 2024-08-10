import React from 'react';
import './App.css';
import Header from './components/Header';
import { Box,Grid } from '@mui/material';
import Chat from './components/Chat';
import SideMenu from './components/SideMenu';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import MovieListGenres from './components/MovieListGenres';
// import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div >
     <Header/>
     <Grid container>
      <Grid item>
     <SideMenu/>
     </Grid>
     <Grid item>
     {/* <div className='movielist'> */}
     {/* <Grid container sx={{backgroundColor:'yellow',alignContent:'center',alignItems:'center'}} >
     <Grid item > */}
     <Box display={'flex'} sx={{width:600,height:400,justifyContent:'center',backgroundColor:'red',padding:5}}>
       <Chat/>
     </Box>
     {/* </div> */}
     </Grid>
     </Grid>
    </div>
    
    
  );
}
export default App;
