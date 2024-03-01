export const showAddTripModal = (payload) => {
  return { type: 'SHOW_MODAL', payload };
};
export const hideAddTripModal = (payload) => {
  return { type: 'HIDE_MODAL', payload };
};
