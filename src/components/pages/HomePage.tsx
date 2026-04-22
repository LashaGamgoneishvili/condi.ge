import React from 'react';
import { Hero } from '../home/Hero';
import { ServicesGrid } from '../home/ServicesGrid';
import { WhyUs } from '../home/WhyUs';
import { BookingCard } from '../home/BookingCard';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <BookingCard />
    </>
  );
};
