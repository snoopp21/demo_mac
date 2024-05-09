import {
  Box,
  Image,
  Flex,
  Center,
  Grid,
  Heading,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Elipse from '../img/elipse.png';
import Elipse1 from '../img/elipse1.png';
import Elipse2 from '../img/elipse2.png';
import Elipse3 from '../img/elipseblue.png';
import Elipse4 from '../img/elipse4.png';
import Elipse5 from '../img/elipse5.png';
import Elipse6 from '../img/elipse6.png';

const Bubble = () => {
  return (
    <>
      <Box my={20}>
        <Heading textAlign={'center'} mb={4}>
          Entrepreneurs & Creators <br /> who trust us
        </Heading>
        <Center>
          <Grid
            templateColumns={{ base: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
            placeItems={'center'}
            rowGap={2}
          >
            <Image
              src={Elipse4}
              objectFit={'contain'}
              boxSize={'120px'}
              mb={'-4rem'}
              display={{ base: 'none', md: 'block' }}
            />
            <Image src={Elipse3} objectFit={'contain'} boxSize={'70px'} />
            <Image src={Elipse2} objectFit={'contain'} boxSize={'160px'} />
            <Image
              src={Elipse5}
              objectFit={'contain'}
              boxSize={'140px'}
              mb={'-4rem'}
            />

            {/* ------------------- */}

            <Image
              src={Elipse2}
              objectFit={'contain'}
              boxSize={'140px'}
              mb={'-4rem'}
              display={{ base: 'none', md: 'block' }}
            />

            <Image
              src={Elipse}
              objectFit={'contain'}
              boxSize={'150px'}
              mt={'-2rem'}
            />

            <Box display={{ base: 'none', md: 'block' }} />

            <Image
              src={Elipse3}
              objectFit={'contain'}
              boxSize={'70px'}
              mr={{ md: '-8rem' }}
            />

            {/* -------------------- */}

            <Image
              src={Elipse}
              objectFit={'contain'}
              boxSize={'150px'}
              mr={{ md: '-14rem' }}
              display={{ base: 'none', md: 'block' }}
            />
            <Image
              src={Elipse6}
              objectFit={'contain'}
              boxSize={'150px'}
              mr={{ md: '-14rem' }}
              display={{ base: 'block', md: 'none' }}
            />

            <Image
              src={Elipse3}
              objectFit={'contain'}
              boxSize={'70px'}
              mr={'-5rem'}
              mt={'-5rem'}
            />
            <Image
              src={Elipse1}
              objectFit={'contain'}
              boxSize={'200px'}
              mt={{ base: '-16rem', md: '-12rem' }}
              mr={{ base: '-1.15rem', md: 'unset' }}
            />
            <Box display={{ base: 'block', md: 'none' }} />
            <Image
              src={Elipse6}
              objectFit={'contain'}
              boxSize={'140px'}
              mt={{ md: '-6rem' }}
              display={{ base: 'none', md: 'block' }}
            />
          </Grid>
        </Center>
        <Center mt={6}>
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
        </Center>
      </Box>
    </>
  );
};

export default Bubble;
