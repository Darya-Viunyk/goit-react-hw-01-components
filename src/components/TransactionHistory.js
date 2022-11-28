import propTypes from 'prop-types';
import { TransCart } from './TransCart';
export const TransactionHistory = ({ transactions }) => {
  // console.log(friends);
  return (
    <table>
      {transactions.map(item => (
        <TransCart key={item.id} item={item} />
      ))}
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
