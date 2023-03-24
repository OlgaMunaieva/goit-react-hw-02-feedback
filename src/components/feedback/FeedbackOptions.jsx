const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [addGood, addNeutral, addBad] = options;
  return (
    <div>
      <button onClick={addGood}>Good</button>
      <button onClick={addNeutral}>Neutral</button>
      <button onClick={addBad}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
