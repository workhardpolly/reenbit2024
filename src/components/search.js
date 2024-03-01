import { useDispatch } from 'react-redux';

import { searchTrip } from '../redux/actions/searchTrip';

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(searchTrip(e.target.value));
  };

  return (
    <div className="search-wrapper">
      <input onChange={handleSearch} type="text" className="search-input" placeholder="Search your trip" />
    </div>
  );
}
