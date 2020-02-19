import React from 'react';
import './style.less';
import { useDataValue } from '../store/datacontext';


const District = () => {
  
  const {distData, distFilter,colors} = useDataValue()
  
  return(
    <>
      {distData && distData.length > 1 && 
        distData.map((data,i) => 
          <li key={i}  
            className={`district_${data.id}`}
            style={{backgroundColor: colors[data.id - 1]}} 
            onClick = {e => distFilter(data.id)}>{data.name}
          </li>
        )
      }
    </>
  )
}

export default District;