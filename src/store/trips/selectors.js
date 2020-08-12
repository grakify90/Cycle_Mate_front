export const selectTrips = (state) => {
  return state.trips.items;
};

export const selectTripsLoading = (state) => {
  return state.trips.loading;
};
