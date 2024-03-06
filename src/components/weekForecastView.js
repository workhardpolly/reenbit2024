import React from 'react';
import { useSelector } from 'react-redux';

export default function WeekForecastView() {
  const city = useSelector((state) => state.currentCityReducer.cityName);
  const tripStartDate = useSelector((state) => state.currentCityReducer.tripStartDate);
  const tripEndDate = useSelector((state) => state.currentCityReducer.tripEndDate);

  const [processData, setProcessData] = React.useState(null);
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let renderData = '';
  console.dir(processData);

  React.useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${tripStartDate}/${tripEndDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_KEY}&contentType=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProcessData(data))
      .catch((e) => console.log(e));
    return;
  }, [city, tripStartDate, tripEndDate]);

  if (processData) {
    renderData = processData.days.map((day) => {
      return (
        <div key={day.datetime} className="trip-weather-card">
          <div className="trip-weather-day">{weekday[new Date(day.datetime).getDay()]}</div>

          <img
            className="trip-weather-icon"
            alt={day.icon}
            src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/1st%20Set%20-%20Color/${day.icon}.png?raw=true`}></img>

          <div className="trip-weather-day-temp">
            {day.tempmax} / {day.tempmin}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Trip forecast</h3>
      <div className="trip-weather-container">{renderData}</div>
    </div>
  );
}
