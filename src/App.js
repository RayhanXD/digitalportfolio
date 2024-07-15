import React, { useState, useEffect } from 'react';
import './App.scss';

const words = ["AI Engineer", "Software Developer", "Creative Learner"]; // Add more words as needed

export default function App() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[newIndex]);
        return newIndex;
      });
    }, 2400); // Match the interval with the animation duration

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <body>
      <div className='content'>
        <section className='home'>
          <h2 id='hey'>Hey, my name is</h2>
          <h1>RAYHAN MOHAMMAD</h1>
          <h2 id='am'>I am a... <span className="animated-word" id="changingrad">{currentWord}</span></h2>
        </section>
      </div>
    </body>
  );
}