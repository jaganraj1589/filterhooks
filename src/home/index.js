import React, { useEffect, useRef } from 'react';
import '../component/style.less';
import './home.less';
import District from '../component/category.js'
import EventList from '../component/card.js'
import Monthselect from '../component/monthselect';
import Pattern from './pattern';


const Home = () => {
const home = useRef()
  useEffect(()=>{
    if(home.current){
      home.current.classList.add('playAnime')
    }
  },[])
  return (
    
    <div className="homePage" ref={home}>
      <section className="videoBlock">
        <div className="videoWrapper">
          <Pattern />
          <video
            src='https://s3.eu-central-1.amazonaws.com/abudhabi-moments/uploads/local/events/1575627253030.mp4'
            muted
            playsInline
            autoPlay
            loop
          />
          <div className="content">
            <h1></h1>
          </div>
        </div>
      </section>
        <section className="filtersBlock">
          <div className="filterBox">
            <div className="contentArea">
              <div className="districtFilter">
                <ul>
                  <District/>
                </ul>
              </div>
              <Monthselect />
            </div>
          </div>
        </section>
        <section className="eventsBlock">
          <div className="contentArea">
            <div className="eventsWrap">
              <EventList />
            </div>
          </div>
        </section>
      </div>
      
  )
}

export default Home;