import React from 'react';
import './style.less';

const District = ({distData, distFilter}) => {
  console.log(distData)
  const colors = ["rgb(253, 217, 0)", "rgb(149, 201, 61)", "rgb(4, 178, 226)", "rgb(179, 30, 140)", "rgb(238, 137, 34)"]
  return(
    <>
      {distData && distData.length > 1 && 
        distData.map(data => 
          <li  
            style={{backgroundColor: colors[data.id - 1]}} 
            onClick = {e => distFilter(data.id)}>{data.name}
          </li>
        )
      }
    </>
  )
}

export default District;