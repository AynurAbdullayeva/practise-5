import React from "react";
import { Hero } from "../../components/Hero/Hero";
import Huge from "../../components/Huge/Huge";
import Students from "../../components/Students/Students";
import WeOffer from "../../components/WeOffer/WeOffer";
import { Helmet } from "react-helmet";  

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>


      <Hero />
      <WeOffer />
      <Students />
      <Huge />
    </>
  );
};

export default Home;
