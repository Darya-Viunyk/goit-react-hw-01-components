import propTypes from 'prop-types';
import { Stats } from './Stats';
export const Statistics = ({ data }) => {
  console.log(data);
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
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
