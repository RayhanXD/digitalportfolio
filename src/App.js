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
            <h3>Find out more about me</h3>
            <span class="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </div>
        </section>
        <section className='about'>

        </section>
      </div>
    </body>
  );
}