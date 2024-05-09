import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CardImg1 from '../img/cardimg1.png';
import CardImg2 from '../img/cardimg2.png';
import CardImg3 from '../img/cardimg3.png';

const images = [CardImg1, CardImg2, CardImg3]; // Array of image paths

const Card = () => {
  return (
    <>
      <Heading textAlign={'center'} mt={12}>
        But that's not all
      </Heading>
      <Text textAlign={'center'} mt={2} mb={8}>
        We have over 100+ products available for you to sell, allowing you{' '}
        <br /> to choose what you want and stay relevant
      </Text>
      <Grid
        templateColumns={{ md: '1fr 1fr 1fr' }}
        gap={4}
        justifyContent={'center'}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            h={'400px'}
            _hover={{
              cursor: 'pointer',
              filter: 'brightness(0.7)',
              transition: '0.3s ease-in-out',
            }}
          />
        ))}
      </Grid>
      <Flex justify={'center'} mt={12}>
        <Button
          bgGradient="linear(to-r, purple.400, purple.700)"
          w={'12rem'}
          color="white"
          _hover={{
            bgGradient: 'linear(to-r, purple.500, purple.800)',
          }}
          rounded={'full'}
        >
          Join the Waitlist
        </Button>
      </Flex>
    </>
  );
};

export default Card;
