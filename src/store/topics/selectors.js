export const selectTopics = (state) => {
  return state.topics.items;
};

export const selectTopicsLoading = (state) => {
  return state.topics.loading;
};
