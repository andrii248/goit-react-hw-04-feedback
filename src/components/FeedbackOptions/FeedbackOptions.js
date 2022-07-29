import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <div className={css.container}>
         {options.map(name => {
            return (
               <div className={css.btn} key="name">
                  <button
                     onClick={() => onLeaveFeedback(name)}
                     type="button"
                     name={name}
                  >
                     {name}
                  </button>
               </div>
            );
         })}
      </div>
   );
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
