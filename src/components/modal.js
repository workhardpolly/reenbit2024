import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideAddTripModal } from '../redux/actions/toggleAddTripModal';
import { addTripCity } from '../redux/actions/citiesList';
import { availiableCitiesList } from './defaultList/availiableCities';

export default function Modal() {
  const modalVisible = useSelector((state) => state.toggleAddTripModalReducer);

  const initialModalState = {
    cityName: 'Berlin',
    cityPicture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg',
    tripStarts: null,
    tripEnds: null,
  };

  const [newTrip, setNewTrip] = React.useState(initialModalState);

  // console.log(newTrip);

  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const maxDate = new Date(today.setDate(today.getDate() + 15)).toISOString().split('T')[0];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTripCity(newTrip));
    dispatch(hideAddTripModal());

    setNewTrip(initialModalState);

    return;
  };

  return !modalVisible ? null : (
    <div className="modal-addtrip" onClick={() => dispatch(hideAddTripModal())}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="modal-header">
          <div>Create trip</div>
          <div className="modal-close" onClick={() => dispatch(hideAddTripModal())}>
            &#10006;
          </div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <select
            className="modal-citieslist-dropdown"
            onChange={(e) => {
              return setNewTrip({ ...newTrip, ...JSON.parse(e.target.value) });
            }}>
            {availiableCitiesList.map((option) => {
              return (
                <option
                  key={option.cityName}
                  value={JSON.stringify({ cityName: option.cityName, cityPicture: option.cityPicture })}>
                  {option.cityName}
                </option>
              );
            })}
          </select>
          <div>
            <label htmlFor="startTripDate">Start date:</label> <br />
            <input
              type="date"
              id="startTripDate"
              min={minDate}
              max={maxDate}
              onChange={(e) => setNewTrip({ ...newTrip, tripStarts: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="endTripDate">End date:</label>
            <br />
            <input
              type="date"
              id="endTripDate"
              min={newTrip.tripStarts ? newTrip.tripStarts : minDate}
              max={maxDate}
              onChange={(e) => setNewTrip({ ...newTrip, tripEnds: e.target.value })}
            />
          </div>

          {newTrip.tripEnds < newTrip.tripStarts ? <div>End date have to be later than start date</div> : ''}

          <div className="modal-footer">
            <button onClick={() => dispatch(hideAddTripModal())}>Close</button>
            <button disabled={false} onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
