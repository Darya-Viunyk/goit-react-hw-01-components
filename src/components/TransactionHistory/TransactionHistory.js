import propTypes from 'prop-types';
import style from './TransactionHistory.module.css';
import { TransCart } from './TransCart';
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
        {transactions.map(transaction => (
          <TransCart key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ).isRequired,
};
