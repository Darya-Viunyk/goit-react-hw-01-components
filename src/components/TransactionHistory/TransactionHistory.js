import propTypes from 'prop-types';
import style from './TransactionHistory.module.css';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {transactions.map(({ type, amount, currency, id }) => (
          <tr className={style.tr} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ),
};
