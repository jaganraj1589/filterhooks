import React, { useState } from 'react';
import Select from 'react-select'
import './mselect.less'
import { useDataValue } from '../store/datacontext';

const Monthselect = () =>{
  const {mselect, monthOptions, setmSelect} = useDataValue();
  return(
    <div className="monthFilter">
       <Select
        value={mselect}
        onChange={selectedMonth => (setmSelect(selectedMonth) )}
        options={monthOptions}
        isMulti={true}
        className = {'mSelect'}
        classNamePrefix  = {'mSelect'}
        hideSelectedOptions={false}
      />
    </div>
  )
}
export default Monthselect;