import React from 'react';
import './style.less';
import { useDataValue } from '../store/datacontext';


const District = () => {
  
  const {distData, distFilter,colors, districtId} = useDataValue()
  
  return(
    <>
   {/* {console.log(districtId, 'sssdistrictId ')} */}
      {distData && distData.length > 0 && 
        distData.map((data,i) => 
          <li key={i}  
            className={`district_${data.id} ${districtId.includes(data.id) ? 'active': ''}` }
            style={{backgroundColor: colors[data.id - 1]}} 
            onClick = {e => distFilter(data.id)}>{data.name}
          </li>
        )
      }
    </>
  )
}

export default District;