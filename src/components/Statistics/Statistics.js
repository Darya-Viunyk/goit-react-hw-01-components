import propTypes from 'prop-types';
import style from './Statistics.module.css';
export const Statistics = ({ data }) => {
  return (
    <section className={style.statistics}>
      {data.title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.statList}>
        {data.map(item => (
          <li className={style.item} key={item.id}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ),
};
