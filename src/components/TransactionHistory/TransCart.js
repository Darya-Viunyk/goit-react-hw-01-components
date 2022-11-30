import propTypes from 'prop-types';
import style from './TransCart.module.css';
export const TransCart = ({ transaction }) => {
  return (
    <tr className={style.tr}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
};
TransCart.propTypes = {
  transactions: propTypes.shape({
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  }),
};
