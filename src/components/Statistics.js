import propTypes from 'prop-types';
export const Statistics = ({ data: { id, label, percentage } }) => {
  return (
    <div>
      <section>
        <h2>Upload stats</h2>
        <ul>
          <li>
            <span>{label.id}.docx</span>
            <span>{percentage}%</span>
          </li>
          <li>
            <span>{label.id}.pdf</span>
            <span>{percentage}%</span>
          </li>
          <li>
            <span>{label.id}.mp3</span>
            <span>{percentage}%</span>
          </li>
          <li>
            <span>{label.id}.psd</span>
            <span>{percentage}%</span>
          </li>
          <li>
            <span>{label.id}.pdf</span>
            <span>{percentage}%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
