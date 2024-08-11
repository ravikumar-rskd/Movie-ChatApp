import React, { useState } from 'react';
import { Box,Button } from '@mui/material';

const SideMenu=({users})=>{
    const [showUsers,setShowUsers]=useState(false);
    const handleUsers=()=>{
        console.log("Users Button clicked");
        setShowUsers(!showUsers);
        if(!showUsers){
        console.log("Users Displayed");
        console.log(users);
        }
    }
    
    return(
        <div>
            <Box sx={{
                width:200,
                height:500,
                backgroundColor:'pink',
                marginTop:1,
                padding:1
                }} >
                <Button variant='contained' onClick={handleUsers} >
                {showUsers ? "Hide Users" : "Show Users"}
                </Button>
                {showUsers &&
                (<Box sx={{ marginTop: 2 }}>
                    {users.map((user, index) => (
                        <div key={index} sx={{ marginBottom: 1 }}>
                            {user}
                        </div>
                    ))}
                </Box>
            )}
            </Box>
        </div>

    );
};

export default SideMenu;