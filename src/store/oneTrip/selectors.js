export const selectTripData = (state) => {
  return state.oneTrip.loading
    ? null
    : {
        item: state.oneTrip.item,
        organizer: state.oneTrip.organizer,
        participants: state.oneTrip.participants,
      };
};
