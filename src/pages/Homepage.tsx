import React from "react";
import Benefits from "../components/Benefits";
import Cards from "../components/Cards";
import MainSection from "../components/MainSection";

const Homepage: React.FC = () => {
  return (
    <>
      <MainSection />
      <Benefits />
      <Cards />
    </>
  );
};

export default Homepage;
