import React, {useState, useMemo, useContext} from 'react';
import Header from './header';
import Footer from './footer';
import {AuthContext} from '../store/authvalue.js'

const Layout = ({children, searchRes, searchFilter, clearFilter}) => {
  
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
          <Header searchRes={searchRes} searchFilter={searchFilter}  clearFilter={clearFilter}/>
          <div  tabIndex="-1" role="group">
            <div  tabIndex="-1" role="group">
              {children}
            </div>
          </div>
          <Footer />
        </AuthContext.Provider>
      </>
    )
  
}
export default Layout;