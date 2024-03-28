import React from "react";
import Hero from "../components/widgets/Hero";
import Content from "../components/widgets/Content";
import Others from "../components/widgets/Others";
import Choose from "../components/widgets/Choose";
import Security from "../components/widgets/Security"
import Finance from "../components/widgets/Finance"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Others />
      <Choose />
      <Security />
      <Finance />
    </>
  );
};

export default HomePage;
