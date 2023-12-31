import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { loginApi } from '@/api/auth';


const Login = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const onSubmitForm = async () => {
        try {
            console.log("formData", formData);
            const res = await loginApi({
                email: formData.email,
                password: formData.password
            });
            console.log("res in submit login button-->", res?.data?.data);
            if (res.data.status == 200 || res.data.status == 201) {
                localStorage.setItem("firstName", (res?.data?.data?.firstName));
                localStorage.setItem("token", (res?.data?.data?.token));
            }
            return res
        } catch (err) {
            console.log("error in submit login-->", err.message);

            return err;
        }
    }
    if (props.loginFunc) {
        props.loginFunc(onSubmitForm)
    }
    return (
        <>

            <div class="w-full max-w-xs  m-auto">
                <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input onChange={(e) => {
                            setFormData({ ...formData, "email": e.target.value })
                        }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input nChange={(e) => {
                            setFormData({ ...formData, "password": e.target.value })

                        }} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>

            </div>


        </>
    )
}
export default Login;