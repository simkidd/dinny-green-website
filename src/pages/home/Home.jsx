import React from "react";
import Hero from "./containers/Hero";
import Counter from "./containers/Counter";
import Features from "./containers/Features";
import './home.scss'
import Classes from "./containers/Classes";
import Video from "./containers/Video";
import Stories from "./containers/Stories";
import Instructor from "./containers/Instructor";
import ContactSection from "./containers/ContactSection";
import AboutSection from "./containers/AboutSection";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Counter />
      <Features />
      <AboutSection />
      <Classes />
      <Video />
      <Stories />
      <Instructor />
      <ContactSection />
    </div>
  );
};

export default Home;
