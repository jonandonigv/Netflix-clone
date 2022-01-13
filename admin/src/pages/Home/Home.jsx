import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'
import { userData } from '../../dummyData'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function Home() {

    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        
      ], []);
    
    const [userStats, setUserStats] = useState([]);
    
    useEffect(() => {

      const getStats = async () => {
        try {
          const res = await axios.get("users/stats", {
            headers: {
              token: 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ5NTMzNjkzZWM3MDU2ZWFlY2Q2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjExNDU4OSwiZXhwIjoxNjQyNTQ2NTg5fQ.PWuZrYFxk8WDAcTDW8_bOI2Nf1UrN2vFRoYkbpSlxco"
            },
          });
          const statsList = res.data.sort((a, b) => {
            return a._id - b._id;
          });
          statsList.map((item) => 
            setUserStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], "New User": item.total },
            ])
          );
        } catch (error) {
          console.log(error);
        }
      };
      getStats();
    }, [MONTHS]);

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userStats} title={'User Analytics'} grid dataKey='New User'/>
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
