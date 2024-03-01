import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentCity } from '../redux/actions/changeCurrentCity';
import { showAddTripModal } from './../redux/actions/toggleAddTripModal';

export default function CitiesList() {
  const dispatch = useDispatch();
  const allTrips = useSelector((state) => state.citiesListReducer);
  const searchValue = useSelector((state) => state.searchReducer);

  const filteredTrips = allTrips.filter((trip) => {
    return trip.cityName.toLowerCase().includes(searchValue.toLowerCase());
  });

  const renderList = searchValue ? filteredTrips : allTrips;

  const cityCards = (cities) => {
    return (
      <div className="cards">
        <div className="add-trip" onClick={() => dispatch(showAddTripModal())}>
          <p>&#10010;</p>
          <p>Add trip</p>
        </div>
        {cities.map((city) => {
          return (
            <div
              key={city.cityName + city.tripStarts}
              className="city-card"
              onClick={() => {
                dispatch(
                  changeCurrentCity({
                    cityName: city.cityName,
                    tripStartDate: city.tripStarts,
                    tripEndDate: city.tripEnds,
                  })
                );
              }}>
              <img className="city-card-picture" src={city.cityPicture} alt={city.cityName}></img>
              <div className="city-info">
                <h4>{city.cityName}</h4>
                <p>
                  {city.tripStarts} - {city.tripEnds}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <>{cityCards(renderList)}</>;
}
