import React, {useState, useEffect, useContext} from 'react';
import Select from 'react-select'
import '../login/style.less';
import '../detail/style.less';
import Recaptcha from 'react-recaptcha';
import {AuthContext} from '../store/authvalue.js';
import { useHistory } from "react-router-dom";
let recaptchaInstance;

const Register = () => {
const [values, setValues] = useState({
  Firstname: "",
  Lastname:"",
  Gender:""
})
const [gender, setGender] = useState('')

const handleValues = (e) =>{
  const { name, value} = e.target;

  setValues({[name]: value});
  console.log(values);
}

const gendervalue = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' }
]
  return(
  <div className="formPopup loginWrap">
    <div className="patterns form"><i></i><i></i></div>
    <div className="contentArea">
      <button className="close-icon"></button>
      <h1>Register</h1>
      <div className="formWrap">
        <form>
          <ul>
            <li>
              <label htmlFor="Firstname" className="phInput">
                <input name="Firstname" value={values.firstname} id="fName" type="text" placeholder=" " onChange={handleValues} />
                  <span>First name*</span>
              </label>
            </li>
            <li>
              <label htmlFor="Lastname" className="phInput">
                <input name="Lastname" value={values.lastname} id="lName" type="text" placeholder=" " onChange={handleValues} />
                  <span>Last name*</span>
              </label>
            </li>
            <li>
              <label htmlFor="Lastname" className="phInput">
                <Select
                  value={gender} 
                  onChange={selectedgender => (setGender(selectedgender) )}
                  isMulti={true}
                  options={gendervalue}
                  className = {'cSelect'}
                  classNamePrefix  = {'cSelect'}
                />
              </label>
            </li>
            <li>

            </li>
          </ul>
        </form>
      </div>
    </div>    
  </div>
  )
}

export default Register;