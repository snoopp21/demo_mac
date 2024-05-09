import { Grid, Box, Text, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Payment from '../img/payment.png';
const KickStart = () => {
  return (
    <>
      <Heading textAlign={'center'}>
        Kickstart your online <br /> business without any hassle
      </Heading>
      <Grid
        templateColumns={{ md: '1fr 1fr' }}
        placeItems={'center'}
        mt={16}
        gap={4}
      >
        <Box mb={8}>
          <Heading size={'lg'} textAlign={{ base: 'center', md: 'unset' }}>
            Pay when you sell
          </Heading>
          <Text
            fontSize={{ md: 'lg' }}
            color={'gray'}
            mt={2}
            textAlign={{ base: 'center', md: 'unset' }}
          >
            With our print-on-demand model, you only incur costs when you make a
            sale. It’s straightforward, fair, and designed with your growth in
            mind.
          </Text>
        </Box>
        <Box>
          <Image src={Payment} boxSize={'350'} />
        </Box>
      </Grid>
    </>
  );
};

export default KickStart;
