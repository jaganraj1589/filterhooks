import React, { useState, useEffect } from 'react';
import Searchresult from './searchresult';



const Searchlist = ({searchRes, searchFilter}) => {
  const [searchData, setSearchData] = useState('')
  // const [searchRes, setSearchRes] = useState(eventData)
  const searchfilter = (e) =>{
    searchFilter(e.target.value)
    setSearchData(e.target.value)
  }
  const clearFilter = (e) => {
    
    // alert(1)
  }
 
  return(
    <>
      <span className="searchBtn ">
        <i className="icon-search"></i><i className="icon-x"></i>
      </span>
      <div className="searchContainer">
        <div className="searchBox">
          <input type="text" value={searchData} placeholder="Search" onBlur={clearFilter} onChange={searchfilter}/>
          <i className="icon-search"></i><i className="icon-x"></i>
        </div>
        <div className="resultBox">
          <Searchresult  searchRes={searchRes} searchFilter={searchFilter}/>
        </div>
      </div>
    </>
  )
}

export default Searchlist;