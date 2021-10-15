import {useState,useEffect} from 'react';
import Sawo from "sawo";
import loginCss from '../components/loginCss.css'
import Home from '../components/Home'

const Login =  ()=>{

    const[isLogin,setIsLogin] = useState(false);

    useEffect(()=>{
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            // Add the API key copied from 2nd step
            apiKey: process.env.REACT_APP_SAWO_API_KEY,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
                setIsLogin(true)
            },
        };
        let sawo = new Sawo(config)
        sawo.showForm()
    },[])

    return(
        <div className="login">
        {isLogin  ? <Home /> : 
            <div id="sawo-container" style={{height: "300px", width: "400px"}}>
                
            </div>
        }
        </div>
    )
}
export default Login;