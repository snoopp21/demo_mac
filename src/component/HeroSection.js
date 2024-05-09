import { Flex, Heading, Text, Box, Button, Center } from '@chakra-ui/react';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <Flex justify={'center'} align={'center'} h={'80vh'}>
        <Box>
          <Heading
            textAlign={{ md: 'center' }}
            mb={2}
            size={'2xl'}
            lineHeight={{ base: '2.6rem', md: '4rem' }}
          >
            Build your brand <br />
            <Text
              bg={'purple.200'}
              textAlign={{ md: 'center' }}
              px={{ md: 4 }}
              rounded={{ md: 'full' }}
              display={{ base: 'none', md: 'block' }}
            >
              without the startup costs
            </Text>
            <Box display={{ base: 'block', md: 'none' }}>
              <Text
                bg={'purple.200'}
                textAlign={{ md: 'center' }}
                px={{ md: 4 }}
                rounded={{ md: 'full' }}
                my={1}
                borderRightRadius={'full'}
              >
                without the
              </Text>
              <Text
                borderRightRadius={'full'}
                bg={'purple.200'}
                textAlign={{ md: 'center' }}
                px={{ md: 4 }}
                rounded={{ md: 'full' }}
              >
                startup costs
              </Text>
            </Box>
          </Heading>
          <Text textAlign={{md:'center'}} color={'gray'} fontWeight={500} mt={4}>
            Create and sell 100+ products at unbearable prices. <br />
            Zero risk, all reward. Start now!
          </Text>
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
      </Flex>
    </>
  );
};

export default HeroSection;
