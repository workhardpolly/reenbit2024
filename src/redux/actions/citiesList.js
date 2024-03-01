export const addTripCity = (payload) => {
  return { type: 'ADD_TRIP', payload: { ...payload } };
};

export const removeTripCity = (payload) => {
  return { type: 'REMOVE_TRIP', payload: { ...payload } };
};
