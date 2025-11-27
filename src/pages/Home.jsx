import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutUs from '../components/AboutUs.jsx'
import PerformanceSection from "../components/PerformanceSection";
import Services from "../components/ServicesSection";
import Testimonial from "../components/TestimonialSection";
import Team from "../components/TeamSection";
import WorkingTechnologies from '../components/WorkingTechnologies.jsx'
import Newsletter from "../components/NewsletterSection";
function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="performance">
        <PerformanceSection />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="portfolio">
        <WorkingTechnologies />
      </section>
      <section id="contact">
        <Newsletter />
      </section>
    </>
  );
}
export default Home;
