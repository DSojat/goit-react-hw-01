import css from '../TransactionHistoryItem/TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.tableBodyItem}>{type}</td>
      <td className={css.tableBodyItem}>{amount}</td>
      <td className={css.tableBodyItem}>{currency}</td>
    </>
  );
};

export default TransactionHistoryItem;
