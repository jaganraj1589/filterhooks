import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import '../component/style.less';
import './style.less';
import {AuthContext} from '../store/authvalue.js'

const Header = () =>{
  const { token, storeToken, localtoken,clear } = useContext(AuthContext);
  return(
    <header>
        <div className="contentArea">
          <Link to="/" className="logo"></Link>
          <nav>
            <span className="searchBtn ">
            <i className="icon-search"></i><i className="icon-x"></i>
            </span>
            <div className="searchContainer">
              <div className="searchBox">
                <input type="text" placeholder="Search" />
                <i className="icon-search"></i><i className="icon-x"></i>
              </div>
            </div>
            <div className="langSwitch">
              <span className="ar">AR</span>
              <span className="en">EN</span>
            </div>
            {console.log(localtoken)}
            {localtoken ? <button className="profile" onClick= {()=>clear()}><i className="icon-logout"></i></button>
            : <Link to="/login" className="profile">
              <i className="icon-login"></i>
            </Link>
            }
            
          </nav>
        </div>

      </header>
  )
}
export default Header;