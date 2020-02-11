import React, {useState, useMemo, useContext} from 'react';
import Header from './header';
import Footer from './footer';
import {AuthContext} from '../store/authvalue.js'

const Layout = (props) => {
  
  // const providerValue = useMemo(() => ({localtoken, setToken}), [localtoken, setToken])
const temptoken = (window.localStorage && window.localStorage.getItem('token')) || null
const[localtoken, setToken] = useState(temptoken)


  const storeToken = token => {
    setToken(token);
    window.localStorage && window.localStorage.setItem('token', token);
  };
  const clear = token => {
    setToken();
    window.localStorage && window.localStorage.removeItem('token');
  };
  // const { token } = useContext(localtoken);
    return(
      
      <>
        <AuthContext.Provider value={{localtoken, storeToken, clear}}>
          <Header />
          <div  tabIndex="-1" role="group">
            <div  tabIndex="-1" role="group">
              {props.children}
            </div>
          </div>
          <Footer />
        </AuthContext.Provider>
      </>
    )
  
}
export default Layout;