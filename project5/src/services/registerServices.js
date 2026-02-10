import { post,get } from "../utils/request"

export const registerRequest=(data)=>{
    const res=post("users",data);
    return res;
}

export const isLogin=(email)=>{
    const res=get(`users?email=${email}`);
    return res;
}