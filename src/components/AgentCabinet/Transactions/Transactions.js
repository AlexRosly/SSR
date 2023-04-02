import PropTypes from 'prop-types';
import TransactionsAgent from './TransactionsAgent/TransactionsAgent';
import TransactionsForPayout from './TransactionsForPayout/TransactionsForPayout';
import TransactionsObject from './TransactionsObject/TransactionsObject';
import scss from './Transactions.module.scss';

export default function Transactions({
  transactionsForPayout = [{}],
  transactionsObject = [{}],
  transactionsAgent = [{}],
}) {
  return (
    <section className={scss.transactions}>
      <TransactionsForPayout transactions={transactionsForPayout} />
      <TransactionsObject transactions={transactionsObject} />
      <TransactionsAgent transactions={transactionsAgent} />
    </section>
  );
}

Transactions.propTypes = {
  transactionsForPayout: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  transactionsObject: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  transactionsAgent: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
