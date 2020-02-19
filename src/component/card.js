import React from 'react';
import './style.less';
import {Link} from 'react-router-dom'
import { useDataValue } from '../store/datacontext';

const EventList = () => {
  const {eventData,colors} = useDataValue()
  console.log(eventData)
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  const getdateMonth = (date) => {
    let dateSplit = date.split("-")
    let monthName = months[parseInt(dateSplit[1] - 1)]
    return monthName
  }
  return(
    <>      
        {eventData && eventData.length > 0 &&
          eventData.map((data, i) => {
            const date = data.start_date.split("-")[2]
            
            const dateMonth = getdateMonth(data.start_date)
            
            return(
              <div className="eventList" style={{color: colors[data.district_id - 1]}} key={i}>
              <Link to={`/${data.slug}` } className="eventLink"></Link>
              <figure
                style={{ backgroundImage: `url(${data.assets[0].src})` }}
              ></figure>
              {/* {console.log(data.start_date)*/}
              <div className="detail">
                <div className="startDate">
                  <h2>
                    {dateMonth}
                    <strong>{date}</strong>
                  </h2>
                </div>
                <div className="info">
                  <h3>{data.name}</h3>
                  <span><i className="icon-calendar"></i> {data.display_date}</span>
                  <span> <i className="icon-time"></i>
                    {data.start_time} - {data.end_time}
                  </span>
                  <span><i className="icon-marker"></i> {data.district}</span>
                </div>
              </div>
            </div>
            )
          })}
          <i className="eventList"></i>
          <i className="eventList"></i>
          <i className="eventList"></i>
      </>
  )
}

export default EventList;