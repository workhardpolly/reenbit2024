import './App.css';

import Search from './components/search';
import DayForecastView from './components/dayForecastView';
import Modal from './components/modal';
import WeekForecastView from './components/weekForecastView';
import CitiesCards from './components/citiesCards';
import Auth from './components/auth';

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
        <Auth />
        <DayForecastView />
      </div>
      <Modal />
    </div>
  );
}

export default App;
