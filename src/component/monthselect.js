import React, { useState } from 'react';
import Select from 'react-select'
import './mselect.less'

const Monthselect = () =>{
  const [mselect, setmSelect] = useState(null)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const handleSelect = (selectedMonth) => {
    setmSelect(selectedMonth)
    console.log(`Option selected:`, selectedMonth);
  }
  return(
    <div className="monthFilter">
       <Select
        value={mselect}
        onChange={handleSelect}
        options={options}
        isMulti={true}
        className = {'mSelect'}
        classNamePrefix  = {'mSelect'}
      />
    </div>
  )
}
export default Monthselect;