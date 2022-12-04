import propTypes from 'prop-types';
import style from './Statistics.module.css';
export const Statistics = ({ title, data }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ),
};
