import './App.css';
import React, { Component } from 'react';
import logo from './assets/logo.png';
import chocoPizza from './assets/choco-pizza.png';
import fbIcon from './assets/fb-icon.png';
import flicIcon from './assets/flic-icon.png';
import gpIcon from './assets/gp-icon.png';
// import hrImg from './assets/hr-img.png';
import instaIcon from './assets/insta-icon.png';
import lab from './assets/lab.png';
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
        <header className='header-flex'>
          <div>
            <img src={logo} alt='a logo'/>
            <div id="header-text" className="inline-block">
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
    )
  }
}

class ThiccSpan extends Component {
  render() {
    return (
        <div className="thick">
        </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <div>
          <p id="choco-pizz">Chocolate Pizza</p>
          <span id="date">POSTED ON MAY 13 2021 / DESERTS</span>
          <span id="print"><img src={printIcon} alt="A print button"/>PRINT</span>
        </div>
        <div><img className='pizza' src={chocoPizza} alt="some pizza"/></div>
        <div><p><img  className='pizza' src={lab} alt="some instructions"/></p></div>
        <div className="list-box">
          <ul>
            <li><input type="checkbox"/> 1 1/2 Cups Milk</li>
            <li><input type="checkbox"/> 1/2 Cup Mascarpone</li>
            <li><input type="checkbox"/> 1/2 tsp pink salt</li>
            <li><input type="checkbox"/> 1 lb black mission figs</li>
            <li><input type="checkbox"/> 1/2 cup brown sugar</li>
            <li><input type="checkbox"/> 2-4 tbsp water</li>
          </ul>
          <ul className="list">
            <li><input type="checkbox"/> 1 1/2 cups heavy cream</li>
            <li><input type="checkbox" checked readOnly/> 1/3 granulated sugar</li>
            <li><input type="checkbox" checked readOnly/> 2 egg yolks</li>
            <li><input type="checkbox"/> 1 lemon, juiced</li>
            <li><input type="checkbox"/> 2 tbsp butter</li>
            <li><input type="checkbox"/> 1 cup honey roasted pecans, roughly chopped</li>
          </ul>
        </div>
        <hr/>
        <div className="person-info">
          <img src={vanPic} alt="the author" className="person-pic"/>
          <span className="person-intro">
              <span className="bold-big">Vanessa Stevenson</span> 
              <span className="intro-text">Food Enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
          </span>
          <button className="button">Share Recipe</button>
        </div>
      </main>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footer-logo-area">
          <span className="footer-line"></span>
          <img className='img-inline-block' src={smallLogo} alt="small logo"/>
          <span className="footer-line"></span>
        </section>
      <div>
          <p>Delicious Ⓒ 2021 · All rights reserved,</p>
          <p>Proudly published by Chen and Missael,</p>
      </div>
      </footer>
    )
  }
}


// PARENT FUNCTION
function App() {
  return (
    <div>
      <Header />
      <ThiccSpan />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
