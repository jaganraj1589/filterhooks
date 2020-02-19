import React, { useState } from 'react';
import Searchresult from './searchresult';
import { useDataValue } from '../store/datacontext';



const Searchlist = () => {
  const [searchData, setSearchData] = useState('')
  const [clrData, setClrData] = useState('')
  const [searchRes, setSearchRes] = useState([]);
  const {initeventData} = useDataValue()
  const searchFilter = (e) => {
    let searchEvent =  initeventData.filter((data) =>{
      let searchIndex = data.name.toLowerCase() + data.district.toLowerCase() + data.overview.toLowerCase() + data.activities.toLowerCase()
      return searchIndex.indexOf(
        e.toLowerCase()) !== -1   
     });
     setSearchRes(searchEvent)
  }
  const searchfilter = (e) =>{
    searchFilter(e.target.value)
    setSearchData(e.target.value)
    setClrData('active')
  }
  const clearFilter = (e) => {
    setSearchRes('')
    setSearchData('')
    setClrData('')
  }
 
  return(
    <>
      <span className="searchBtn ">
        <i className="icon-search"></i><i className="icon-x"></i>
      </span>
      <div className="searchContainer">
        <div className="searchBox">
          <input type="text" value={searchData} placeholder="Search" onBlur={e => setTimeout(clearFilter, 200) } onChange={searchfilter}/>
          <i className="icon-search"></i>
          <i className={`icon-x ${clrData ? 'active': ''}` } onClick={clearFilter}></i>
        </div>
        {searchData && searchData.length ?
        <div className="resultBox">
           <Searchresult  searchRes={searchRes} /> 
        </div>
        : ''}
      </div>
    </>
  )
}

export default Searchlist;