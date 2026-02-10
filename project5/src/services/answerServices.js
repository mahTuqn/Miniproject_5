import { getCookie } from "../cookieUtils/cookieUtils"
import { get, post } from "../utils/request";

export const getUserAnswer=async() =>{
    const userId=await getCookie("id");
    const res=await get(`answers?userId=${userId}`);
    return res;
}


export const postAnswer=async(options)=>{
    const res=await post("answers",options);
    return res;
}


export const getIdAnswer=async(id)=>{
    const res=await get(`answers/${id}`);
    return res;
}