import Modal from 'components/Common/Modal';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import scss from './TransactionsForPayout.module.scss';

const TransactionsForPayoutRow = ({
  object_id = 'no object id',
  object_name = '-',
  object_registration_date = '-',
  agent_id = 'no agent id',
  agent_registration_date = '-',
}) => (
  <tr className={scss.tableDataRow}>
    <th className={scss.tableDataRowHeading} scope="row">
      {'ID ' + object_id}
    </th>

    <td className={scss.tableData}>{object_name}</td>
    <td className={scss.tableData}>{object_registration_date}</td>
    <td className={scss.tableData}>{'ID ' + agent_id}</td>
    <td className={scss.tableData}>{agent_registration_date}</td>
  </tr>
);

TransactionsForPayoutRow.propTypes = {
  object_id: PropTypes.string.isRequired,
  object_name: PropTypes.string.isRequired,
  object_registration_date: PropTypes.string.isRequired,
  agent_id: PropTypes.string.isRequired,
  agent_registration_date: PropTypes.string.isRequired,
};

const headings = ['Object ID', 'Object name', 'Date of registration', 'Agent ID', 'Date of registration'];

export default function TransactionsForPayout({ transactions }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className={scss.wrapper}>
      <div className={scss.roundCorners}>
        <table className={scss.table}>
          <thead className={scss.tableHead}>
            <tr className={scss.tableHeadRow}>
              {headings.map((heading, idx) => (
                <th key={idx} className={scss.tableColHeading} scope="col">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={scss.tableBody}>
            {transactions?.map(item => (
              <TransactionsForPayoutRow key={item.transaction_id} {...item} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={scss.payoutBlock}>
        <div className={scss.payoutTextWrapper}>
          <p className={scss.payoutText}>Available for payout:</p>
          <p className={scss.payoutAmount}>
            {transactions[0]?.available_for_payout} <span className={scss.payoutCurrency}>USD</span>
          </p>
        </div>
        <button className={scss.orderPayoutButton}>Order a payout</button>
      </div>

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <p>Order a payout info window</p>
        </Modal>
      )}
    </div>
  );
}

TransactionsForPayout.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
