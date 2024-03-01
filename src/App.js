import './App.css';
import Search from './components/search';
import DayForecastView from './components/dayForecastView';
import Modal from './components/modal';
import WeekForecastView from './components/weekForecastView';
import CitiesList from './components/cities';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <h1>
          Weather <b>Forecast</b>
        </h1>

        <Search />
        <CitiesList />
        <WeekForecastView />
      </div>
      <div className="side-block">
        <DayForecastView />
      </div>
      <Modal />
    </div>
  );
}

export default App;
