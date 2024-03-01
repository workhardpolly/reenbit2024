export const changeCurrentCity = (payload) => {
  return { type: 'CHANGE_CURRENT_CITY', payload: { ...payload } };
};
