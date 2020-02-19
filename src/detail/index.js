import React, {useState, useEffect} from 'react';
import './style.less';
import ReactDOM from "react-dom";
import {
  BrowserRouter as 
  Route,
  useParams
} from "react-router-dom";
import { useDataValue } from '../store/datacontext';

const Detail = () =>{
  const {detailData, navi} = useDataValue()
  const [deTab, setDeTab] = useState('overview')
  const activeTab = (e) => {
    const clicked  = e.currentTarget.id
    setDeTab(clicked)
  }

  let { slug } = useParams();
  useEffect(() => {
    navi(slug)
  }, [])
  return(
    <div>
      {detailData && detailData.length > 0 && 
      detailData.map((data) => {
        return(
            (data.slug === slug) ? 
              <>
                
                      <div className="eventsContainer">
                        <div className="eventPatterns">
                          <i className="left"></i>
                          <i className="right"></i>
                        </div>
                        <div className="banner">
                          <div className="mainBanner">
                              <img src={`${data.assets[0].src}`}/>
                              
                              <div className="eventInfo">
                                <h1>{data.name}</h1>
                                <div className="info">
                                  <section>
                                    <div>
                                      <p>
                                        <i className="icon-calendar"></i>
                                          <span>{data.display_date}</span>
                                      </p>
                                      <p>
                                        <i className="icon-time"></i>
                                          <span>{data.display_time}</span>
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <i className="icon-marker"></i>
                                          <span>{data.district}</span>
                                      </p>
                                      <p>
                                        <i className="icon-ticket"></i>
                                          <span>{data.display_time}</span>
                                      </p>
                                    </div>
                                  </section>
                                  <nav>
                                    <button className="btnShare">
                                      <i className="icon-share"></i>
                                    </button>   
                                    <a href="/" className="btnPrimary">
                                      <span>Join Now</span>
                                      </a>                          
                                  </nav>
                                </div>
                              </div>
                              
                          </div>
                          <div className="eventSliderBlk">

                              </div>
                          <div className="eventDetailBlk">
                                <nav className="mainNav">
                                  <button className={`${deTab === "overview" ? 'active': ''}`} id="overview" onClick = {activeTab}>
                                    <span>Overview</span>
                                  </button>
                                  <button className={` ${deTab === "Details" ? 'active': ''}`} id="Details" onClick = {activeTab}>
                                    <span>Details</span>
                                  </button>
                                  <button className={`${deTab === "Location" ? 'active': ''}`} id="Location" onClick = {activeTab}>
                                    <span>Location</span>
                                  </button>
                                </nav>
                                <div className="detailWrap">
                                  {deTab === "overview" ?
                                <div className="detailTab overview">
                                <div className="detailContent"  dangerouslySetInnerHTML={{__html: data.overview}}>
                                </div>
                              </div> : ''  
                                }
                                {deTab === "Details" ?
                                <div className="detailTab Details">
                                <div className="detailContent" dangerouslySetInnerHTML={{__html: data.activities}} ></div>
                                
                              </div> : ''  
                                }
                                {deTab === "Location" ?
                                <div className="detailTab Location">
                                <div className="address">
                                <p>{data.location_address}</p>
                                </div>
                                <div className="mapHolder">
                                  <iframe title="location"
                                  src={data.location_link}>

                                  </iframe>
                                </div>
                              </div> : ''  
                                }
                                  
                                </div>
                              </div>
                        </div>
                      
                </div>
              </>
            : ''
        )
      })
      }
      
    </div>
  )
}
export default Detail;