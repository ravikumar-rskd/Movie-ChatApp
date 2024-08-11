import axios from 'axios';

const BASE_URL='http://localhost:8080/api/chat';

export const postMessage = async(user,message)=>{
    console.log("fetching Api 8080 for POST");
    const response=await axios.post(
        `${BASE_URL}`,null,{
            params:{
                sender:user,
                content:message
            }
        }
    );
    console.log(response.data);
    
    return response.data;
};
// export const getMessages = async()=>{

// };