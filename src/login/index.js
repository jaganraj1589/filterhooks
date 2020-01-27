import React, {useState} from 'react';
import './style.less';
import '../detail/style.less';

const Login = () => {
  

  const [password, setPassword] = useState([])
  const [email, setEmail] = useState([])
  const handleEmail= (e) => {
    setEmail(e.target.value)
  }
  const handlePassword= (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (data) => {
    data.preventDefault();
    const loginEmail = email
    const loginPass = password
    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          token: json
        });
      })
      .catch(error => console.error(error));
   
    console.log("EMail: " + JSON.stringify(email));
    console.log("Password: " + JSON.stringify(password));
  }
  
  return(
    <div className="formPopup loginWrap">
      <div className="patterns form"><i></i><i></i></div>
      <div className="contentArea">
          <button className="close-icon"></button>
          <h1>Login</h1>
          <div className="formWrap">
            <form>
              <ul>
                <li>
                  <label for="email" className="phInput">
                    <input name="email" value={email} id="emailLogin" type="email" placeholder=" " onChange={e => handleEmail(e)} />
                      <span>Your email</span>
                  </label>
                </li>
                <li>
                  <label for="password" className="phInput">
                    <input name="password" value={password} id="passLogin" type="password" placeholder=" " onChange={e =>handlePassword(e)} />
                    <span>Your password</span>
                    </label>
                </li>
                <li className="fpWrap">
                  <div className="forgotPassword">
                    <a href="/auth/forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                </li>
              </ul>
              <span id="status"></span>
              <button type="submit" onClick={handleSubmit} className="btnPrimary ">Sign In</button>
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