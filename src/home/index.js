import React from 'react';
import '../component/style.less';
import District from '../component/category.js'
import EventList from '../component/card.js'


const Home = ({distData, eventData, distFilter}) => {

  return (
    <div className="homePage">
        <section className="filtersBlock">
          <div className="filterBox">
            <div className="contentArea">
              <div className="districtFilter">
                <ul>
                  <District
                    distData={distData}
                    distFilter={distFilter}
                  />
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="eventsBlock">
          <div className="contentArea">
            <div className="eventsWrap">
              <EventList eventData={eventData}  />
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home;