import { ContainerButtons, Button } from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [addGood, addNeutral, addBad] = options;
  return (
    <ContainerButtons>
      <Button onClick={addGood}>Good</Button>
      <Button onClick={addNeutral}>Neutral</Button>
      <Button onClick={addBad}>Bad</Button>
    </ContainerButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default FeedbackOptions;
