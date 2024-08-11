// import React, { useState } from 'react';
// import { Box,Button } from '@mui/material';

// const SideMenu=({users})=>{
//     const [showUsers,setShowUsers]=useState(false);
//     const handleUsers=()=>{
//         console.log("Users Button clicked");
//         setShowUsers(!showUsers);
//         if(!showUsers){
//         console.log("Users Displayed");
//         console.log(users);
//         }
//     }
    
//     return(
//         <div>
//             <Box sx={{
//                 width:200,
//                 height:500,
//                 backgroundColor:'pink',
//                 marginTop:1,
//                 padding:1
//                 }} >
//                 <Button variant='contained' onClick={handleUsers} >
//                 {showUsers ? "Hide Users" : "Show Users"}
//                 </Button>
//                 {showUsers &&
//                 (<Box sx={{ marginTop: 2,display:'flex',flexDirection:'column' }}>
//                     {users.map((user, index) => (
//                         <Button key={index} variant='outlined' sx={{ marginBottom: 1,'&:hover':{backgroundColor:'yellow'}}}>
//                             {user}
//                         </Button>
//                     ))}
//                 </Box>
//             )}
//             </Box>
//         </div>

//     );
// };

// export default SideMenu;
import React, { useState } from 'react';
import { Box, Button, Card } from '@mui/material';

const SideMenu = ({ users = [], messages = [] }) => {
    const [showUsers, setShowUsers] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUsers = () => {
        console.log("Show/Hide Users Button clicked");
        setShowUsers(!showUsers);
    };

    const handleUserClick = (user) => {
        console.log(`${user} Button clicked`);
        setSelectedUser(user);
        console.log(messages);
        setShowUsers(false); // Hide the users list
    };

    const handleBackClick = () => {
        setSelectedUser(null);
        setShowUsers(true); // Show the users list again
    };

    return (
        <div>
            <Box sx={{
                width: 200,
                height: 500,
                backgroundColor: 'pink',
                marginTop: 1,
                padding: 1
            }}>
                {selectedUser === null ? (
                    <>
                        <Button variant='contained' onClick={handleUsers}>
                            {showUsers ? "Hide Users" : "Show Users"}
                        </Button>
                        {showUsers && (
                            <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column' }}>
                                {users.map((user, index) => (
                                    <Button
                                        key={index}
                                        variant='outlined'
                                        sx={{ marginBottom: 1, '&:hover': { backgroundColor: 'yellow' } }}
                                        onClick={() => handleUserClick(user)}
                                    >
                                        {user}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </>
                ) : (
                    <>
                        <Button variant='contained' onClick={handleBackClick}>
                            Show Users
                        </Button>
                        <Box sx={{ marginTop: 2 }}>
                            <h3>{selectedUser}'s Messages</h3>
                            <Card sx={{ overflowY: 'auto', height: 300,paddingLeft:2 }}>
                                {messages
                                   .filter(msg => msg.text.startsWith(`${selectedUser}:`))
                                    .map((msg, index) => (
                                        <p key={index}>{msg.text}</p>
                                    ))
                                }
                            </Card>
                        </Box>
                    </>
                )}
            </Box>
        </div>
    );
};

export default SideMenu;
