import React, { useState } from 'react';
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
  const [users,setUsers]=useState([]);
  const [messages, setMessages] = useState([]);

  const handleUpdateMessages = (messages) => {
    console.log("App page-msgs:",messages)
    setMessages(messages);
  };

  return (
    <div >
     <Header/>
     <Grid container>
        <Grid item>
          <SideMenu users={users} messages={messages}/>
        </Grid>
          <Grid item>
            <Box display={'flex'} sx={{width:600,height:400,justifyContent:'center',backgroundColor:'grey',padding:5,marginTop:1}}>
              <Chat userData={setUsers} msgData={handleUpdateMessages} />
            </Box>
          </Grid>
     </Grid>
    </div>
    
    
  );
}
export default App;
