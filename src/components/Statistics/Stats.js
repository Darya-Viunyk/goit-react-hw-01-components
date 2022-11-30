import propTypes from 'prop-types';
import style from './Stats.module.css';
export const Stats = ({ item: { label, percentage } }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}</span>
    </li>
  );
};
Stats.propTypes = {
  data: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.string.isRequired,
  }),
};
