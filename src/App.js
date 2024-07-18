import React, { useState, useEffect, useRef } from 'react';
import './App.scss';

const words = ["AI Engineer", "Software Developer", "Creative Learner"];

export default function App() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const circleRef = useRef(null); // Add this line

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[newIndex]);
        return newIndex;
      });
    }, 2400);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => { // Add this useEffect block
    const updateCirclePosition = () => {
      const circle = circleRef.current;
      const trackingCircle = document.querySelector('.tracking_circle');
      if (circle && trackingCircle) {
        const circleRect = circle.getBoundingClientRect();
        trackingCircle.style.top = `${circleRect.top + window.scrollY}px`;
        trackingCircle.style.left = `${circleRect.left + window.scrollX}px`;
      }
    };

    window.addEventListener('scroll', updateCirclePosition);
    window.addEventListener('resize', updateCirclePosition);
    updateCirclePosition(); // Initial position update

    return () => {
      window.removeEventListener('scroll', updateCirclePosition);
      window.removeEventListener('resize', updateCirclePosition);
    };
  }, []);

  return (
    <body>
      <div className='tracking_circle'></div>
      <div className='content'>
        <section className='nav'>
        <div className='mark2'>
            <p>About Me</p>
            <div className='circle2'></div>
          </div>
        <div className='marks'>
          <p>Home</p>
          <div className='circle' ref={circleRef}></div>
        </div>
          <div className='line'></div>
        </section>
        <section className='home'>
          <h2 id='hey'>Hey, my name is</h2>
          <h1>RAYHAN MOHAMMAD</h1>
          <h2 id='am'>I am a... <span className="animated-word" id="changingrad">{currentWord}</span></h2>
          <div className="more">
            <h3>Scroll for more</h3>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
          </div>
        </section>
        <section className='about' id='about'>
          <h1 className='title'>This is me</h1>
          <div className="grid-container">
            <div className="grid-item vertical" id="item1">
              <div className="grid-content verticalContentTop">
                <h1>Hey, i'm <span className="gradientName">Rayhan Mohammad</span></h1>
                </div>
              <div className="grid-content verticalContentBottom">
                <h1>I have an <span className="gradientName">inlimitable</span> passion for AI & CS</h1>
              </div>
            </div>
            <div className="grid-item horizantal" id="item2">
              <div className="grid-content horizantalContentLeft">
                <div>
                    <ul>
                      <li><span className="gradientName">fullstack</span></li>
                      <li><span className="gradientName">web apps</span></li>
                      <li><span className="gradientName">SAAS</span></li>
                      <li><span className="gradientName">ai driven apps</span></li>
                    </ul>
                  </div>
              </div>
              <div className="grid-content horizantalContentRight">
                <h1>I love building a variety of applications.</h1>
              </div>
            </div>
            <div className="grid-item vertical" id="item3">
              <div className="grid-content verticalContent">3A</div>
              <div className="grid-content verticalContent">3B</div>
            </div>
            <div className="grid-item horizantal" id="item4">
              <div className="grid-content horizantalContentLeft">
                <img src={`${process.env.PUBLIC_URL}/bestpfp.png`} alt="Profile" />
              </div>
              <div className="grid-content horizantalContentRight">
                <h1>This is <span className="bold">everything</span> about me.</h1>
              </div>
            </div>
            <div className="grid-item horizantal" id="item5">
              <div className="grid-content horizantalContentLeft">5A</div>
              <div className="grid-content horizantalContentRight">5B</div>
            </div>
            <div className="grid-item horizantal" id="item6">
              <div className="grid-content horizantalContentLeft">6A</div>
              <div className="grid-content horizantalContentRight">6B</div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}