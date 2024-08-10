import React from 'react';
import { Card,Grid, Typography } from '@mui/material';

const MovieListGenres=()=>{
    const genreList=[
        {genre:'Action',id:1},
        {genre:'Family',id:2},
        {genre:'Drama',id:3},
        {genre:'Romance',id:4},
        {genre:'Anime',id:5},
        {genre:'Cartoon',id:6},
        {genre:'Horror',id:7},
        {genre:'Comedy',id:8},
        
    ]
    return(
            <Grid className='mainGrid' sx={{display:'flex',gap:2,backgroundColor:'yellow',padding:2,flexWrap:'wrap' }}>
                {/* <Card sx={{display:'flex',gap:2}}>
                     <Typography variant='h2'>
                       card1
                     </Typography>
                     
                 </Card> */}
            {genreList.map((list)=>(
                <Card sx={{display:'flex',width:200,height:200,justifyContent:'center'}} key={list.genre}>
                     <Typography variant='h2' fontSize={30}>
                       {list.genre}
                     </Typography>
                 </Card>

             ))}
            </Grid>
    );

};
export default MovieListGenres;
