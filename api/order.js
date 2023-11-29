import axios from "axios";
const BASE_URL = "http://192.168.43.29:7000";
// axios.interceptors.request.use(config => {
// 	config.headers['auth-token'] = "fasfa";
// 	return config;
// });
const getToken=async ()=>{
  return new Promise(async(resolve, reject) => {
    let token=await localStorage.getItem("token");
    console.log("token in getToken",typeof  token);
    resolve(token);
  })
}
export const submitOrderApi = async (data) => {
  try {
const token = await getToken();
    console.log("inside the submit order api--->", data);
    console.log("token in sumbit api---->", token);
    const phoneNumber = data?.address?.phoneNumber;
    const res = await axios(`${BASE_URL}/api/v1/modules/user/order`, {
        method: "POST",
        data: {
          order: data?.order,
          address: data?.address,
          phoneNumber: phoneNumber,
        },
        headers: {
          'content-type': 'text/json',
          "auth-token": token,
        },
      });      
    if (res?.status == 201) {
      delete data?.address["phoneNumber"];
    }
    return res;
  } catch (err) {
    console.log("error in submitOrderApi api--->", err.message);
    return err;
  }
};
