import propTypes from 'prop-types';
export const Stats = ({ item: { label, percentage } }) => {
  console.log(label);
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};
Stats.propTypes = {
  data: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.string.isRequired,
  }),
};
