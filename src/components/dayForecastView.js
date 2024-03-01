import React from 'react';
import { useSelector } from 'react-redux';
import CountDown from './tripCountdown';

export default function DayForecastView() {
  const city = useSelector((state) => state.currentCityReducer.cityName);

  const [processData, setProcessData] = React.useState(null);
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let renderData = '';

  // Fetch weather for selected city

  React.useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_KEY}&contentType=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProcessData(data))
      .catch((e) => console.log(e));
    return;
  }, [city]);

  if (processData) {
    let dayData = processData.days[0];
    // console.dir(processData);
    renderData = (
      <>
        <div className="day-weather-box">
          <h3 className="day-weather-box-day">{weekday[new Date(dayData.datetime).getDay()]}</h3>
          <div className="day-weather-item">
            <img
              className="day-weather-box-icon"
              src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/1st%20Set%20-%20Color/${dayData.icon}.png?raw=true`}></img>

            <div className="day-weather-box-temp">
              {dayData.temp}
              <span>°C</span>
            </div>
          </div>

          <div className="day-weather-box-city">{processData.address}</div>
        </div>
        <CountDown />
      </>
    );
  }

  return <>{renderData}</>;
}
