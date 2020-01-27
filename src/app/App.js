import React, {useState, useEffect} from 'react';
import './App.less';
import District from '../component/category.js'
import Home from '../home'
import Detail from '../detail'
import Login from '../login'
import Layout from "../layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import '../styles/common.less';

const App = () =>{
const [distData, setdistData] = useState([])
const [eventData, setEventData] = useState([])
const [initeventData, setInitEventData] = useState([])
const [detailData, setdetailData] = useState([])
  const fetchDistrict = async () => {
      try{
        const response = await fetch(
          '/api/event_districts?lang=en_US'
        )
        const data = await response.json();
        // console.log(data)
        setdistData(data.message)
        // return data.message
      }
      catch(error){
        return null
      }
  }

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
  const distFilter = (id) => {
    let filterEvent = initeventData.filter((data) =>{
      return data.district_id === id        
     });
    setEventData(filterEvent)
  }

  const navi = (id) => {

    console.log(detailData, 'ytfy')
    let getDetail = initeventData.filter((data) =>{
      console.log(parseInt(data.id))
      return parseInt(data.id)
    })
    // console.log(getDetail)
    setdetailData(getDetail)
  }

  useEffect(() => {
    fetchDistrict()
    fetchEvents()
  }, [])

  return (
    <>
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home distData={distData} eventData={eventData} distFilter={distFilter}/>
            </Route>            
            <Route path="/login">
              <Login />
            </Route>     
            <Route path="/:slug">
              <Detail eventData={eventData} detailData={detailData} navi={navi}/>
            </Route>     
          </Switch>
        </Router>
        
      </Layout>
    </div>
    </>
  );
}
export default App;
