// import React, { useRef,useEffect, useState } from "react";
// import { Box, Card, Grid } from "@mui/material";

// const Chat=()=>{
//     const [user,setUser]=useState('');
//     const [message,setMessage]=useState('');
//     const [messages,setMessages]=useState([]);
//     const boxRef=useRef(null);

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if (user && message) {
//             // Add the new message to the messages array
//             setMessages([...messages, `${user}: ${message}`]);
//             setMessage(''); // Clear the message input
//         }
//         console.log("UseName:"+user);
        
//     }
//     useEffect(() => {
//         // Scroll to the top of the Box when a new message arrives
//         if (boxRef.current) {
//             boxRef.current.scrollTo(
//                 {
//                     top: boxRef.current.scrollHeight,
//                     behavior: 'smooth' // Optional: smooth scrolling
//                 }
//             );
//         }
//     }, [messages]);
   
//     return(
//          <Grid className='mainGrid' sx={{display:'flex',gap:2,backgroundColor:'yellow',padding:2,flexWrap:'wrap' }}>
//                <Card  sx={{width:200,height:300,padding:2}} >
//                 <Box ref={boxRef} sx={{outline:3,width:200,height:200,marginBottom:1,whiteSpace:"pre-line",flexDirection:"column",overflowY:"auto"}}> 
//                     {messages.join(`\n`)}
//                 </Box> 
//                  <form onSubmit={handleSubmit} >
//                     <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
//                     <input 
//                     type="text" 
//                     value={user}
//                     placeholder="Enter username"
//                     onChange={(e)=>setUser(e.target.value)}
//                     style={{width:190,height:20,padding:2}}  />
//                     <input
//                     type="text"
//                     value={message}
//                     placeholder="Message"
//                     onChange={(e)=>setMessage(e.target.value)} 
//                     style={{width:190,height:20,padding:2}} />
//                     <button  type="submit"  >Submit</button>
//                     </Box>
//                 </form>
                 
//                </Card>
//         </Grid>
// );
// };
// export default Chat;

import React, { useState,useEffect,useRef } from "react";
import { Box, Card, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'; // Import Material-UI Delete Icon



const Chat = ({userData,msgData}) => {
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const boxRef = useRef(null);

    useEffect(()=>{
        alert("You will not be able to find recent message at left side for User's Messages ");
    },[]

    );

    const handleSubmit = (e) => {
        console.log('submitted');
        console.log(message);
        
        e.preventDefault();
        if (user && message) {
            setMessages([...messages,{ id: Date.now(), text: `${user}: ${message}` } ]);
            setMessage('');
            // userData(setMessages([messages]));
            userData(prevUsers => [...new Set([...prevUsers, user])]);
            console.log(messages);
            msgData(messages);
            
        }
        
        // const msg=getMessages(responses.data.id)
        
        
        console.log("Username:"+user+",Msg:"+message);
        
    };

    const handleDelete = (id) => {
        setMessages(messages.filter(msg => msg.id !== id));
    };

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.scrollTo({
                top: boxRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
            <Card sx={{ width: 200, height: 300, padding: 2 }}>
                <Box
                    ref={boxRef}
                    sx={{
                        outline: 3,
                        width: 200,
                        height: 200,
                        marginBottom: 1,
                        overflowY: 'auto',//for scrolling feature inside box when reach to end of the box
                        display: 'flex',
                        flexDirection: 'column',//
                    }}
                >
                    {messages.map((msg) => (
                        <Box key={msg.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                            <span>{msg.text}</span>
                            <IconButton onClick={() => handleDelete(msg.id)} size="small">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <input
                            type="text"
                            value={user}
                            placeholder="Enter username"
                            onChange={(e) => setUser(e.target.value)}
                            style={{ width: 190, height: 20, padding: 2 }}
                        />
                        <input
                            type="text"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ width: 190, height: 20, padding: 2 }}
                        />
                        <button type="submit">Submit</button>
                    </Box>
                </form>
            </Card>
    );
};

export default Chat;
