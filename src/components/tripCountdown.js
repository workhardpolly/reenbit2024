import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function CountDown() {
  const tripStartDate = new Date(useSelector((state) => state.currentCityReducer.tripStartDate)).getTime();

  const [countDown, setCountDown] = useState(tripStartDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(tripStartDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [tripStartDate]);

  function getReturnValues(countDown) {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  let timer = getReturnValues(countDown);

  return (
    <>
      <div className="countdown">
        <div className="countdown-days">
          <p>{timer.days > 0 ? timer.days : 0}</p> <p>DAYS</p>
        </div>
        <div className="countdown-hours">
          <p>{timer.hours > 0 ? timer.hours : 0}</p> <p>HOURS</p>
        </div>
        <div className="countdown-minutes">
          <p>{timer.minutes > 0 ? timer.minutes : 0}</p> <p>MINUTES</p>
        </div>
        <div className="countdown-seconds">
          <p>{timer.seconds > 0 ? timer.seconds : 0}</p> <p>SECONDS</p>
        </div>
      </div>
      <div>{timer.seconds < 0 ? 'Trip has passed' : null}</div>
    </>
  );
}
