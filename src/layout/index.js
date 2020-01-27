import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  
    return(
      
      <>
      <Header />
      <div  tabindex="-1" role="group">
        <div  tabindex="-1" role="group">
          {props.children}
        </div>
      </div>
      <Footer />
      </>
    )
  
}
export default Layout;