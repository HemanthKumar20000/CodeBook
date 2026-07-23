import React from "react";
import { Testimonials, FeaturedProducts, Hero, FAQ } from "../../components";
import UseTitle from "../../hooks/UseTitle";
const HomePage = () => {
  UseTitle("HomePage")
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
