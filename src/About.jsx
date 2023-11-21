import React from 'react';
import { useState } from 'react';
import Calendar from './Calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HeroSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    if (showCalendar === false) {
      setShowCalendar(true);
    } else if (showCalendar === true) {
      setShowCalendar(false);
      
    }
  };
  return (
    <div className="hero-section">
<p>Founded in 1995, Salon is an independent publication covering news and politics through a progressive, nonpartisan editorial lens, alongside our rigorous and inquisitive coverage of culture and entertainment, science and health, and food. Our editorial mission is pro-democracy, pro-equality and justice and pro-truth. We ask and seek to answer in good faith — through original reporting, news analysis, investigations, left-leaning and politically independent commentary, insightful cultural criticism, personal essays and in-depth interviews — big questions, such as: 
Never miss the latest news and video from Salon — follow us on your favorite social network (Twitter, Facebook, Instagram, YouTube, TikTok, or LinkedIn) and sign up for our newsletters to deliver more Salon straight to your inbox.
In November of 2023, fast-growing, privately-held media company Find.co acquired Salon.com from prior owners Drew Schoentrup and Chris Richmond. Salon.com thus joined Find.co’s portfolio of media assets with a continued focus on smart, informed, timely reporting and provocative opinion and critical analysis.  Mr. Schoentrup is continuing to serve as CEO through April 2024 with Mr. Richmond serving in an advisory capacity through November of 2024.
</p>
    </div>
  );
};

export default HeroSection;
