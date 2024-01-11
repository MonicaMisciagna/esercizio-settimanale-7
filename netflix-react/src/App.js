import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import BarraNav from './components/BarraNav';
import TrendingNow from './components/TrendingNow';
import WatchItAgain from './components/WatchItAgain';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar />
      <BarraNav />
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
      <Footer />
    </div>
  );
}

export default App;
