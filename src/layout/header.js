import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import '../component/style.less';
import './style.less';
import {AuthContext} from '../store/authvalue.js'
import Searchlist from '../component/search.js'

const Header = ({searchRes , searchFilter}) =>{
  
  const { token, storeToken, localtoken,clear } = useContext(AuthContext);
  console.log(searchRes, 'xxxx')
  return(
    
    <header>
      
        <div className="contentArea">
          <Link to="/" className="logo"></Link>
          <nav>
          <Searchlist searchFilter={searchFilter} searchRes={searchRes}/>
            <div className="langSwitch">
              <span className="ar">AR</span>
              <span className="en">EN</span>
            </div>
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