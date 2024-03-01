import React from 'react';
import { useSelector } from 'react-redux';

export default function WeekForecastView() {
  const city = useSelector((state) => state.currentCityReducer.cityName);
  const tripStartDate = useSelector((state) => state.currentCityReducer.tripStartDate);
  const tripEndDate = useSelector((state) => state.currentCityReducer.tripEndDate);

  const [processData, setProcessData] = React.useState(null);
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let renderData = '';

  React.useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${tripStartDate}/${tripEndDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_KEY}&contentType=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProcessData(data))
      .catch((e) => console.log(e));
    return;
  }, [city]);

  if (processData) {
    renderData = processData.days.map((day) => {
      return (
        <div key={day.datetime} className="trip-weather-card">
          <h6 className="trip-weather-day">{weekday[new Date(day.datetime).getDay()]}</h6>
          <div className="trip-weather-icon"></div>
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
