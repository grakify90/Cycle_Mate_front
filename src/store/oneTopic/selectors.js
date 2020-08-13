export const selectTopicData = (state) => {
  return state.oneTopic.loading
    ? null
    : {
        item: state.oneTopic.item,
        topicstarter: state.oneTopic.topicstarter,
        replies: state.oneTopic.replies,
      };
};
