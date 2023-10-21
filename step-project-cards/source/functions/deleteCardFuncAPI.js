import instance from "./instance.js";
import handleResultDeleteCard from './handleResultDeleteCard.js';


const deleteCardFuncAPI = async (cardObj)=>{
    try{
        const {status} = await instance.delete(`/${cardObj._id}`);
        if (status === 200){
            handleResultDeleteCard(cardObj);
        } 
    }
    catch(error){
        console.error(`deleteCardFunc. The server returned status: ${error} ${error?.response?.data} `);
    }
}


export default deleteCardFuncAPI;

/* ${error.response.data} */