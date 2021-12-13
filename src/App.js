import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import {BrowserRouter as Router,Route} from "react-router-dom"
function App() {
  return (
    <div className="app">

      <Header />
      <div className='app_page'>
          <Sidebar/>
          <RecommendedVideos/>
      </div>
    
    </div>
  );
}

export default App;
