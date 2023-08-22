import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
        <table className={css.transactionHistory}>
          <thead>
            <tr>
              <th className={css.tableHead}>Type</th>
              <th className={css.tableHead}>Amount</th>
              <th className={css.tableHead}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }) =>  (
                <tr key={id} className={css.tableData}>
                  <td className={css.tableBody}>{type}</td>
                  <td className={css.tableBody}>{amount}</td>
                  <td className={css.tableBody}>{currency}</td>
                </tr>
            ))}
          </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default TransactionHistory