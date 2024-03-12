import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentCity } from '../redux/actions/changeCurrentCity';
import { showAddTripModal } from '../redux/actions/toggleAddTripModal';

export default function CitiesCards() {
  const dispatch = useDispatch();
  const allTrips = useSelector((state) => state.citiesListReducer);
  const searchValue = useSelector((state) => state.searchReducer);
  const scrollRef = useRef();

  const filteredTrips = allTrips.filter((trip) => {
    return trip.cityName.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Definition and sorting items to render in cities list

  const renderList = (searchValue ? filteredTrips : allTrips).sort((itemA, itemB) => {
    let cA = itemA.cityName.toLowerCase();
    let cB = itemB.cityName.toLowerCase();

    if (cA < cB) {
      return -1;
    } else if (cA > cB) {
      return 1;
    }
    return 0;
  });

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const cityCards = (cities) => {
    return (
      <div className="cards" ref={scrollRef}>
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
                <div className="city-info-name">{city.cityName}</div>
                <p className="city-card-date">
                  {city.tripStarts} - {city.tripEnds}
                </p>
              </div>
            </div>
          );
        })}
        <div className="add-trip" onClick={() => dispatch(showAddTripModal())}>
          <p>&#10010;</p>
          <p>Add trip</p>
        </div>
      </div>
    );
  };

  return (
    <div className="city-cards-wrapper">
      {cityCards(renderList)}
      <div
        className="city-cards-scrollBtn"
        onClick={() => {
          scroll(-220);
        }}>
        {'<<<'}
      </div>
      <div
        className="city-cards-scrollBtn"
        role="button"
        onClick={() => {
          scroll(220);
        }}>
        {'>>>'}
      </div>
    </div>
  );
}
