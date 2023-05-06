import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import PageBody from './components/pageBody';
import backgroundVideo from '../src/img/background-video2.mp4';

function App() {

  return (
    <>
    <div className="App">
     <div className="bodyContainer">
     <video className='backgroundVideo' loop autoPlay muted>
    <source src={backgroundVideo} type='video/mp4' />
</video>

    <Router>
      <Header />
      <div className="mainBody">
     <PageBody />
      </div>
      <div className="componentBlock"><Footer /></div>
      </Router>

      </div>
    </div>
    </>
  );
}

export default App;
