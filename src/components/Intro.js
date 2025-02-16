import React from 'react';
import SplitText from './SplitText';
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";

const Intro = () => {
  return (
    <div className="intro-container">
      
      <SplitText
        text="hello there, I'm Tahlia"
        className="intro-text"
        delay={100}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
      />
      <FadeInSection>
        <div className="intro-subtitle">Turning caffeine into code, one bug at a time</div>
        <div className="intro-desc">
          I'm a software developer from Durban, South Africa. I'm fascinated by
          large-scale, high-impact products and contributed both web and mobile
          development and continously looking to learn and grow.
        </div>
      </FadeInSection>
    </div>
  );
};

export default Intro;