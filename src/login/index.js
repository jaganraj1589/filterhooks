import React, {useState, useEffect, useContext} from 'react';
import './style.less';
import '../detail/style.less';
import Recaptcha from 'react-recaptcha';
import {AuthContext} from '../store/authvalue.js';
import { useHistory } from "react-router-dom";
let recaptchaInstance;

const Login = () => {  
  const history = useHistory();
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  const { storeToken } = useContext(AuthContext);

  const handleEmail= (e) => {
    setEmail(e.target.value)
  }
  const handlePassword= (e) => {
    setPassword(e.target.value)
  }
 
  var verifyCallback = (res) => {
    setResponse(res)
  };
  const handleSubmit =  (event) => { 
    console.log(response)
    const  params = {
      email: email,
      password: password,
      captcha_token: response
    }
     fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }) 
      .then(res => {
        if (res.ok) {
          // history.push('/') 
          return res.json();
        } 
      })
      .then(data => {
        if(data.success){
          console.log(data.token)
          history.push('/') 
          storeToken(data.token)
        } 
      })
      
      .catch(error => console.error(error));
      console.log(params)
  }
  
  useEffect(() =>{
    if(response){
      handleSubmit()
    }
  },[response])
  
  return(
    <div className="formPopup loginWrap">
      <div className="patterns form"><i></i><i></i></div>
      <div className="contentArea">
          <button className="close-icon"></button>
          <h1>Login</h1>
          <div className="formWrap">
            <form onSubmit={e =>{
                e.preventDefault();
                recaptchaInstance.execute()
              }}>
              <ul>
                <li>
                  <label htmlFor="email" className="phInput">
                    <input name="email" value={email} id="emailLogin" type="email" placeholder=" " onChange={handleEmail} />
                      <span>Your email</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="password" className="phInput">
                    <input name="password" value={password} id="passLogin" type="password" placeholder=" " onChange={handlePassword} />
                    <span>Your password</span>
                    </label>
                </li>
                <li>
                <Recaptcha
                      ref={e => recaptchaInstance = e}
                      sitekey="6Ld9d7oUAAAAAFqs6t_stZAr4dZFyai6mi5EcKAk"
                      size="invisible"
                      render="explicit"
                      verifyCallback={verifyCallback}

                    />
                </li> 
                <li className="fpWrap">
                  <div className="forgotPassword">
                    <a href="/auth/forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                </li>
              </ul>
              {/* <span id="status"> </span> */}
              <button type="submit"  className="btnPrimary ">Sign In</button>
            </form>
            <p className="noaccount">
              <span>Do not have an account?</span> 
              <a href="/auth/register"> Sign up</a>
            </p>
          </div>
      </div>
    </div>
  )
}
export default Login;