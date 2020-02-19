import React, { useState, useContext, createContext, useEffect } from 'react';


const DataFetch = createContext()

export const Dataprovider = ({children}) => {
  const [distData, setdistData] = useState([]);
  const [eventData, setEventData] = useState([]);  
  const [pastEventData, setPastEventData] = useState([]);  
  const [activeEventData, setActiveEventData] = useState([]);  
  const [initeventData, setInitEventData] = useState([]);
  const [detailData, setdetailData] = useState([]);
 
  const colors = ["rgb(253, 217, 0)", "rgb(149, 201, 61)", "rgb(4, 178, 226)", "rgb(179, 30, 140)", "rgb(238, 137, 34)"]
  const fetchDistrict = async () => {
      try{
        const response = await fetch(
          '/api/event_districts?lang=en_US'
        )
        const data = await response.json();
        setdistData(data.message)
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
      console.log('dsdss',data)
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
      console.log('act',data.events)
    }
    catch(error){
      // return null
    }
  }

  const distFilter = (id) => {
    let filterEvent = initeventData.filter((data) =>{
      return data.district_id === id        
     });
    setEventData(filterEvent)
  }


  const navi = (id) => {
    let getDetail = initeventData.filter((data) =>{
      return parseInt(data.id)
    })
    setdetailData(getDetail)
  };


  useEffect(() => {
    fetchDistrict()
    fetchEvents()
    fetchPastEvents()
    fetchActiveEvents()
  }, []);
    
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
        colors
      }}
      >
        {children}
      </ DataFetch.Provider>
    );
}



 

export const useDataValue = () => useContext(DataFetch)