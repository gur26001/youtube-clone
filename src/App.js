import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';


function App() {
  return (
    <div className="app">
      {/* <h1>hello clever programmer!</h1> */}
      <Header />
      <div className='app_page'>
          <Sidebar/>
          <RecommendedVideos/>
      </div>
    
    </div>
  );
}

export default App;
