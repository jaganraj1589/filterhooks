import React from 'react';
import {Link} from 'react-router-dom'

const Searchresult = ({searchRes}) => {

  if(searchRes && searchRes.length > 0)
  {
   return searchRes.map(data =>(
     <div className="resultList" key={data.id}>
       <Link to={`/${data.slug}` }/>
       <figure>
         <img src={data.assets[0]['src']} alt="" />
       </figure>
       <div>
         <h3>{data.page_title}</h3>
         <p>{data.district}</p>
         <p>{data.display_date}</p>
         <p>{data.display_time}</p>
       </div>
   </div>
   )
 )
 } else {
   return <div className="noResult">No Result</div>
 }
}

export default Searchresult;