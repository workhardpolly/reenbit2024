import './App.css';
import Search from './components/search';
import DayForecastView from './components/dayForecastView';
import Modal from './components/modal';
import WeekForecastView from './components/weekForecastView';
import CitiesCards from './components/citiesCards';
import GoogleLogin from './components/GoogleLogin';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <h1>
          Weather <b>Forecast</b>
        </h1>
        <Search />
        <CitiesCards />
        <WeekForecastView />
      </div>
      <div className="side-block">
        <GoogleLogin />
        <DayForecastView />
      </div>
      <Modal />
    </div>
  );
}

export default App;
