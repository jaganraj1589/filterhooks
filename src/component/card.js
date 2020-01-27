import React from 'react';
import './style.less';
import {Link} from 'react-router-dom'

const EventList = ({eventData, distFilter}) => {
  console.log(eventData)
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  const getdateMonth = (date) => {
    let dateSplit = date.split("-")
    let monthName = months[parseInt(dateSplit[1] - 1)]
    return monthName
  }
  return(
    <>      
        {eventData && eventData.length > 1 &&
          eventData.map(data => {
            const date = data.start_date.split("-")[2]
            
            const dateMonth = getdateMonth(data.start_date)
            return(
              <div className="eventList">
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
                  <span>{data.display_date}</span>
                  <span>
                    {data.start_time} - {data.end_time}
                  </span>
                  <span>{data.district}</span>
                </div>
              </div>
            </div>
            )
          })}
      </>
  )
}

export default EventList;