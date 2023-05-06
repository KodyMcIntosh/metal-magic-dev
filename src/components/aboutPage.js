import React from "react";
import { Link } from "react-router-dom";
import jessProfile from "../../src/img/jessProfile5.png";

const AboutPage = () => {
  return (
    <>
     <div className="homeProfile">
    <div className="homeProfileLeft">
    <img src={jessProfile} alt="Jess Lowe Professional Piercer" />
    </div>
    <div className="homeProfileRight">
    <h2>Hi, I'm Jess!</h2>
      <p>I have been a professional piercer since 2008. Throughout my years in this industry, I have become known for my passion for providing my clients with the best, safest piercings possible. I am always looking for ways to further my education around my craft, including attending the 2017 APP conference in Las Vegas, completing online Core Essentials classes and Blood Borne Pathogen classes through APP, and communicating with many various piercers both locally and internationally.</p>
      <p>Quality jewellery is of the utmost importance at Metal Magic Piercings. I am proud to stock some of the most reputable brands in our industry including Anatometal, LeRoi Fine Jewelry, Body Gems, Peoples Jewelry, Gorilla Glass, Junipurr, Buddha Jewelry Organics, and Modern Mood.</p>
      <p>Outside of work, you'll most likely find me hanging out with my amazing family, swearing at my weaving loom while I try to set up a new project, or pottering around outside in the garden with my dogs. And as you might have guessed by my logo, my favourite animals are unicorns!</p>
      <p>Metal Magic Piercings is a studio for everyone. No matter your age, gender, orientation, or the number of piercings you've had before, you are all welcome here. If you have any questions, please have a read through our FAQ, or drop me a message through our contact page.</p>
      <p>I can't wait to meet you all. Let's get magical!</p>
      <p className="button"><Link to={"/contact"}>Contact Us</Link></p>
    </div>
  </div>
    </>
  )

};

export default AboutPage;
