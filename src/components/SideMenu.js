import React from 'react';
import { Box,Button,Grid } from '@mui/material';

const SideMenu=()=>{
    return(
        <div>
        <Grid>
            <Box sx={{width:200,height:500,backgroundColor:'red'}} >
                <Button variant='contained' >Users</Button>
            </Box>
         </Grid>
        </div>

    );
};

export default SideMenu;