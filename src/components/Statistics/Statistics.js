import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
      <div>
         <p classNme={css.text}>
            Good:<span>{good}</span>
         </p>
         <p classNme={css.text}>
            Neutral:<span>{neutral}</span>
         </p>
         <p classNme={css.text}>
            Bad:<span>{bad}</span>
         </p>
         <p classNme={css.text}>
            Total:<span>{total}</span>
         </p>
         <p classNme={css.text}>
            Positive feedback:
            <span>{positivePercentage}%</span>
         </p>
      </div>
   );
};

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
