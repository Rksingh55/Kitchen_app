import axios from "axios";
const BASE_URL="http://192.168.43.29:7000"

export const loginApi=async (data)=>{
    try{
        const res=await axios(`${BASE_URL}/api/v1/modules/user/login`,{
            method: 'POST',
            data:{
                email:data.email,
                password:data.password
            },
        });
        return res;
    }catch(err){
        console.log("error in login api--->",err.message);
        return err;
    }
}

