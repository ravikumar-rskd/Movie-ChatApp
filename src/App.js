import React from 'react';
import './App.css';
import Header from './components/Header';
import { Box,Grid } from '@mui/material';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import MovieListGenres from './components/MovieListGenres';
// import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div >
     <Header/>
     <div className='movielist'>
     <Box display={'flex'} >
      <Grid container sx={{backgroundColor:'black'}} >
      <Grid item>
        <MovieListGenres/>
      </Grid>
      </Grid>
     </Box>
     </div>
    </div>
    
    
  );
}
export default App;
