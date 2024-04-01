import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '/src/userData.json';
import friends from '/src/friends.json';
import transactions from '/src/transactions.json';

import css from '../App/App.module.css';

function App() {
  return (
    <>
      <h2 className={css.taskTitle}>Завдання 1 - Профіль соціальної мережі</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className={css.taskTitle}>Завдання 2 - Список друзів</h2>
      <FriendList friends={friends} />
      <h2 className={css.taskTitle}>Завдання 3 - Історія транзакцій</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
