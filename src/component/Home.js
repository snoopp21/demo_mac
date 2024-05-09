import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import KickStart from './KickStart';
import Card from './Card';
import Brands from './Brands';
import Footer from './Footer';
import SliderComponent from './SliderComponent';
import Bubble from './Bubble';

const Home = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Box mx={4}>
          <HeroSection />

          <Box mx={{ lg: '14rem' }}>
            <Bubble />
            <KickStart />
            <Box my={20}>
              <SliderComponent />
            </Box>
            <Card />
            <Brands />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
