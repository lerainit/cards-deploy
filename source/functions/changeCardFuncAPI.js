import instance from "./instance.js";
import handleResultChangeCard from './handleResultChangeCard.js'

const changeCardFuncApi = async (id, obj)=>{
    try{
        const {status, data} = await instance.put(`/${id}`, obj);
        if(status === 200) {
            handleResultChangeCard(data);
        }
    }   
    catch(error){
        console.error(`changeCardFunc. The server returned status: ${error} ${error?.response?.data}`);
    }
}

export default changeCardFuncApi;