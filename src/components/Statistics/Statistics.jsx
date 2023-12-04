import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return <div>
      <ul>
        <li className={css.item}>
          Good
          <span>
          </span>
          <span>{good}</span>
        </li>
        <li className={css.item}>
          Neutral
          <span>
          </span>
          <span>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad
          <span>  
          </span>
          <span>{bad}</span>
        </li>
      </ul>
      <div></div>
      <p className={css.item}>
        Total
        <span>
        </span>
        <span>{total}</span>
      </p>
      <p className={css.item}>
      Positive feedback
        <span>
          {positivePercentage}%
        </span>
      </p>
    </div>
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}