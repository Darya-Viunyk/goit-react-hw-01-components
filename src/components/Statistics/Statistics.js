import propTypes from 'prop-types';
import style from './Statistics.module.css';
import { Stats } from './Stats';
export const Statistics = ({ data }) => {
  return (
    <section className={style.statistics}>
      {/* {data.title && <h2 className={style.title}>Upload stats</h2>} */}
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statList}>
        {data.map(item => (
          <Stats key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ).isRequired,
};
