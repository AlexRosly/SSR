import PropTypes from 'prop-types';
import scss from './TransactionsAgent.module.scss';

const TransactionsAgentRow = ({
  agent_id = 'no agent id',
  payment_date = '-',
  paid_date = '-',
  referral_payment = '-',
  earnings = '-',
  currency = '-',
}) => (
  <tr className={scss.tableDataRow}>
    <th className={scss.tableDataRowHeading} scope="row">
      {'ID ' + agent_id}
    </th>

    <td className={scss.tableData}>{payment_date}</td>
    <td className={scss.tableData}>{referral_payment + ' ' + currency}</td>
    <td className={scss.tableData}>{earnings + ' ' + currency}</td>
    <td className={scss.tableData}>
      <p className={scss.paidDate}>{paid_date && 'paid ' + paid_date}</p>
    </td>
  </tr>
);

TransactionsAgentRow.propTypes = {
  agent_id: PropTypes.string.isRequired,
  payment_date: PropTypes.string.isRequired,
  paid_date: PropTypes.string.isRequired,
  referral_payment: PropTypes.string.isRequired,
  earnings: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default function TransactionsAgent({ transactions }) {
  return (
    <div className={scss.roundCorners}>
      <table className={scss.table}>
        <thead className={scss.tableHead}>
          <tr className={scss.tableHeadRow}>
            <th className={scss.tableColHeading} scope="col">
              Agent ID
            </th>

            <th className={scss.tableColHeading} scope="col">
              The date of payment
            </th>

            <th className={scss.tableColHeading} scope="col">
              Payment for the services of our service by objects that the agent invited
            </th>

            <th className={scss.tableColHeading} scope="col" colSpan="2">
              Your earnings 2%
            </th>
          </tr>
        </thead>

        <tbody className={scss.tableBody}>
          {transactions?.map(item => (
            <TransactionsAgentRow key={item.transaction_id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionsAgent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
