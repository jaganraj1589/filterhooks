import React, { useState, useContext, createContext, useEffect } from 'react';


const DataFetch = createContext()

export const Dataprovider = ({children}) => {
  const [distData, setdistData] = useState([]);
  const [eventData, setEventData] = useState([]);  
  const [pastEventData, setPastEventData] = useState([]);  
  const [activeEventData, setActiveEventData] = useState([]);  
  const [initeventData, setInitEventData] = useState([]);
  const [detailData, setdetailData] = useState([]);
  const [monthData, setmonthData] = useState([]);
  const [mselect, setmSelect] = useState(null)
  const [initdistrictId, setInitDistrictId] = useState([])
  const [districtId, setDistrictId] = useState([])

  var evemonth= ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
 
  const colors = ["rgb(253, 217, 0)", "rgb(149, 201, 61)", "rgb(4, 178, 226)", "rgb(179, 30, 140)", "rgb(238, 137, 34)"]
  const fetchDistrict = async () => {
      try{
        const response = await fetch(
          '/api/event_districts?lang=en_US'
        )
        const data = await response.json();
        setdistData(data.message)
        
        const getdistrictId = data.message.map(dist =>{
          return dist.id
        })
        console.log(getdistrictId , 'getdistrictId');
        setInitDistrictId([...getdistrictId])
        setDistrictId([...getdistrictId])
      }
      catch(error){
        return null
      }
  };

  const fetchEvents = async () => {
    try{
      const response = await fetch(
        '/api/events?lang=en_US'
      )
      const data = await response.json();
      setEventData(data.events)
      setInitEventData(data.events)
      setdetailData(data.events)
      const labelMonth = data.months.map(i => ({
       value:i-1,
       label:(evemonth[i-1])
      }))
      setmonthData(labelMonth)
    }
    catch(error){
      // return null
    }
  }
  const fetchPastEvents = async () => {
    try{
      const response = await fetch(
        '/api/past_events?lang=en_US'
      )
      const data = await response.json();
      setPastEventData(data.events)
    }
    catch(error){
      // return null
    }
  }

  const fetchActiveEvents = async () => {
    try{
      const response = await fetch(
        '/api/active_events?lang=en_US'
      )
      const data = await response.json();
      setActiveEventData(data.events)
      // setInitEventData(data.events)
    }
    catch(error){
      // return null
    }
  }

 





  const navi = (id) => {
    let getDetail = initeventData.filter((data) =>{
      return parseInt(data.id)
    })
    setdetailData(getDetail)
  };
 
 
  const monthOptions = [
    { value: 'pastevents', label: 'Past events' },
    ...monthData
  ];
  const distFilter = (id) => {   
    let index = districtId.indexOf(id); 
    if((districtId.includes(id)) && (index > -1)){
      let getDist = districtId.splice(index, 1)
      console.log(getDist, 'getDist')
      setDistrictId(getDist)
    }
    else{
      setDistrictId([...districtId, id])
    }
    if(districtId.length === 0){
      setDistrictId([...initdistrictId])
    }
    console.log(initdistrictId, 'initdistrictId');
    console.log(districtId, 'districtId ')
  }
  
  const getEvents = () => {
  let filteredEvents = initeventData
  if (districtId.length){
    filteredEvents = filteredEvents.filter(event => {
      return districtId.includes(event.district_id)
    })
  }
  if(mselect && mselect.length){ 
    let getFilteredMonth = mselect.map(month => month.value)

    console.log(getFilteredMonth, 'getFilteredMonth');

    if(getFilteredMonth.includes('pastevents')) {
      filteredEvents = [ ...pastEventData]
    }
    else{
      filteredEvents = filteredEvents.filter(event => {
        let monthSplit = event.start_date.split('-')[1]
        let selectmonth = parseInt(monthSplit) - 1
        console.log(selectmonth, 'selectmonth');
        return getFilteredMonth.includes(selectmonth)
      })
    }

   
  }
  setEventData(filteredEvents)
  console.log(filteredEvents)
  }

  useEffect(() => {
    fetchDistrict()
    fetchEvents()
    fetchPastEvents()
    fetchActiveEvents()
  }, []);

  useEffect(() => {
    getEvents()
  }, [districtId, mselect])
    
    return(
      <DataFetch.Provider
      value={{
        detailData,
        eventData,
        distData,
        fetchDistrict,
        fetchEvents,
        distFilter,
        navi,
        initeventData,
        colors,
        mselect,
        monthOptions,
        setmSelect,
        districtId
      }}
      >
        {children}
      </ DataFetch.Provider>
    );
}


// const chooseMonth = (mon) => {
  //   let getMonth = initeventData.filter((data) =>{
  //     let monthSplit = data.start_date.split('-')[1]
  //    let selmonth = evemonth[parseInt(monthSplit)-1]
  //    console.log(selmonth)
  //     return selmonth ==  mon
  //   })
  //   console.log(getMonth)
  //   setEventData(getMonth)
  // };

// const handleSelect = (selectedMonth) => {
  //   setmSelect(selectedMonth)  
  //   // console.log(selectedMonth)
  //   // // if(!selectedMonth){
  //   // //   setEventData(activeEventData)
  //   // //   // setInitEventData(activeEventData)
  //   // // }
    
  //   // selectedMonth.map(data=>{
  //   //   console.log(evemonth[data.value] )
  //   //   getMonth.push(evemonth[data.value])
      
     
  //   //   // if (evemonth.includes(data.value)){
  //   //   //   chooseMonth(data.value)
  //   //   // }
  //   //   // else if (!evemonth.includes(data.value)){
  //   //   //   chooseMonth()
  //   //   // }
  //   //   // else if (data.value === 'pastevents'){
  //   //   //   setEventData(pastEventData)
  //   //   //   setInitEventData(pastEventData)
  //   //   // }
      
  //   // })
  //   // setmonthEvent(getMonth)
  //   // console.log(monthEvent)
  //   // // if (evemonth.includes(monthIndex)){
  //   // //   getMonth.push(monthIndex)
  //   // // }
  //   // // setmonthEvent(getMonth)
  //   // // console.log(getMonth)
   
  // }
 

export const useDataValue = () => useContext(DataFetch)