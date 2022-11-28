import propTypes from 'prop-types';
export const TransCart = ({ item }) => {
  //   console.log(friend);
  return (
    <div>
      <thead>
        <tr>
          <th>{item.type}</th>
          <th>{item.amount}</th>
          <th>{item.currency}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </div>
  );
};
TransCart.propTypes = {
  transactions: propTypes.shape({
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  }),
};
