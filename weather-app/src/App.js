import './App.css';
import FriendList from './Organisms/FriendList';
import profilePicture from './Atoms/profilePicture';

// let respondJson

// fetch ('api.openweathermap.org/data/2.5/weather?q=seoul&appid=1e3311b52ecba3779577b5cb4ec047ec')
//   .then(response => respondJson = response.json)

// console.log(respondJson)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-box">
          <h1 className="city-name">서울(강남구)</h1>
          <div className="profile main">
              <img className="profile-picture" src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20200603001356048249ecba8d8b8617764132.jpg" alt="mainPicture"/>
            <div className="name main">
              name
            </div>
          </div>
          <h1 className="temp">00℃</h1>
          <FriendList/>
        </div>
      </header>
    </div>
  );
}

export default App;