import './App.css';
import React, { Component } from 'react';
import logo from './assets/logo.png';
import chocoPizza from './assets/choco-pizza.png';
import fbIcon from './assets/fb-icon.png';
import flicIcon from './assets/flic-icon.png';
import gpIcon from './assets/gp-icon.png';
import hrImg from './assets/hr-img.png';
import instaIcon from './assets/insta-icon.png';
import lab from './assets/lab.png';
import listBg from './assets/list-bg.png';
import mailIcon from './assets/mail-icon.png';
import pintIcon from './assets/pint-icon.png';
import printIcon from './assets/print-icon.png';
import rssIcon from './assets/rss-icon.png';
import smallLogo from './assets/small-logo.png';
import twitIcon from './assets/twit-icon.png';
import vanPic from './assets/van-pic.png';

class Header extends Component {
  render() {
    return (
      <div>
        <header className='header-flex'>
          <div>
            <img src={logo} alt='a logo'/>
            <div id="header-text" class="inline-block">
              <article id="title">Delicious</article>
              <article id="subtitle">THE BEST FOOD BLOG ON THE WEB</article>
            </div> 
          </div>
          <div id="header-icon" className='float-right'>
            <img className="h-icon" alt="social media button" src={fbIcon}/>
            <img className="h-icon" alt="social media button" src={twitIcon}/>
            <img className="h-icon" alt="social media button" src={gpIcon}/>
            <img className="h-icon" alt="social media button" src={instaIcon}/>
            <img className="h-icon" alt="social media button" src={flicIcon}/>
            <img className="h-icon" alt="social media button" src={pintIcon}/>
            <img className="h-icon" alt="social media button" src={rssIcon}/>
            <img className="h-icon" alt="social media button" src={mailIcon}/>
          </div>
        </header>
      </div>
    )
  }
}

class thiccSpan extends Component {
  render() {
    return (
      <div>
        <span className="thick" />
      </div>
    )
  }
}


// PARENT FUNCTION
function App() {
  return (
    <div>
      <Header />
      <thiccSpan />    
    </div>
  );
}

export default App;
