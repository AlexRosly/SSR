import PropTypes from 'prop-types';
import scss from './TransactionsObject.module.scss';

const TransactionsObjectRow = ({
  object_id = 'no object id',
  payment_date = '-',
  paid_date = '-',
  payment_for_services = '-',
  earnings = '-',
  currency = '-',
}) => (
  <tr className={scss.tableDataRow}>
    <th className={scss.tableDataRowHeading} scope="row">
      {'ID ' + object_id}
    </th>

    <td className={scss.tableData}>{payment_date}</td>
    <td className={scss.tableData}>{payment_for_services + ' ' + currency}</td>
    <td className={scss.tableData}>{earnings + ' ' + currency}</td>
    <td className={scss.tableData}>
      <p className={scss.paidDate}>{paid_date && 'paid ' + paid_date}</p>
    </td>
  </tr>
);

TransactionsObjectRow.propTypes = {
  object_id: PropTypes.string.isRequired,
  payment_date: PropTypes.string.isRequired,
  paid_date: PropTypes.string.isRequired,
  payment_for_services: PropTypes.string.isRequired,
  earnings: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default function TransactionsObject({ transactions }) {
  return (
    <div className={scss.roundCorners}>
      <table className={scss.table}>
        <thead className={scss.tableHead}>
          <tr className={scss.tableHeadRow}>
            <th className={scss.tableColHeading} scope="col">
              Object ID
            </th>

            <th className={scss.tableColHeading} scope="col">
              The date of payment
            </th>

            <th className={scss.tableColHeading} scope="col">
              Payment for services our service
            </th>

            <th className={scss.tableColHeading} scope="col" colSpan="2">
              Your earnings 8%
            </th>
          </tr>
        </thead>

        <tbody className={scss.tableBody}>
          {transactions?.map(item => (
            <TransactionsObjectRow key={item.transaction_id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionsObject.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
