import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '/src/userData.json';
import friends from '/src/friends.json';

import '../App/App.css';

function App() {
  return (
    <>
      <h2>Завдання 1 - Профіль соціальної мережі</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Завдання 2 - Список друзів</h2>
      <FriendList friends={friends} />
      <h2>Завдання 3 - Історія транзакцій</h2>
    </>
  );
}

export default App;
