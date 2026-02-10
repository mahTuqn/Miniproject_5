import { get, post } from "../utils/request"

export const getQuestion=async(id)=>{
    const res=await get(`questions?topicId=${id}`);
    return res;
}

