import {
  Grid,
  Box,
  Flex,
  Image,
  Text,
  Stack,
  Input,
  Center,
  Heading,
  Button,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import Circle from '../img/footerCircle.png';
import Logo from '../img/whitelogo.svg';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const data = [
  'About Us',
  'Privacy Policy',
  'Terms & Condition',
  'Delivery Information',
];

const data2 = ['Courses', 'Contact', 'Cookie Policy', 'Refund & Return Policy'];

const iconButtonStyles = {
  boxSize: 10,
  isRound: true,
  border: '2px solid white',
  _hover: { bg: 'white', color: 'black' },
  color: 'white',
  bg: 'transparent',
  fontSize: '2xl',
  cursor: 'pointer',
};

const Footer = () => {
  return (
    <>
      <Center>
        <Box
          m={4}
          shadow="rgb(0 0 0 / 20%) 0px 0px 12px"
          mt={20}
          p={{ base: '1rem', md: '3rem 10rem' }}
          rounded={12}
          mb={'-5rem'}
          bg={'gray.100'}
          zIndex={1}
        >
          <Heading textAlign={'center'}>Start your dream brand now!</Heading>
          <Text my={4} textAlign={'center'}>
            Your journey to establishing a successful brand starts now.
          </Text>
          <Center>
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
      </Center>
      <Box bg={'gray.800'} py={8}>
        <Grid templateColumns={{ md: '1fr 1fr 1fr' }}>
          <Flex justify={{ md: 'center' }} mt={6} px={{ base: 4, md: 14 }}>
            <Stack spacing={14}>
              <Image
                src={Circle}
                w={{ base: '80px', md: '140px' }}
                h={{ base: '80px', md: '140px' }}
              />
              <Text
                color={'white'}
                mt={4}
                display={{ base: 'none', md: 'block' }}
              >
                MeRise is the innovation and technology arm of Macmerise, the
                brand that pioneered print on demand in India. With our
                experience and expertise, we help you take your business to the
                next level.
              </Text>
              <Text
                fontSize={'sm'}
                color={'gray.400'}
                display={{ base: 'none', md: 'block' }}
              >
                Adarsh Industrial Estate, 141, Sahar Rd, next to Cigarette
                Factory, Navpada, Chakala, Andheri East, Mumbai, Maharashtra
                400099
              </Text>
            </Stack>
          </Flex>
          <Flex align={'end'} mb={4}>
            <Box w={'100%'} px={14}>
              <Center mb={20}>
                <Image src={Logo} w={'200px'} />
              </Center>
              {data.map(value => (
                <Text
                  mt={6}
                  color={'gray.400'}
                  pb={2}
                  borderBottom={'1px solid'}
                  borderColor={'gray.400'}
                  width="100%"
                >
                  {value}
                </Text>
              ))}
            </Box>
          </Flex>

          <Flex align={'end'} mb={4}>
            <Box w={'100%'} px={14}>
              {data2.map(value => (
                <Text
                  mt={6}
                  color={'gray.400'}
                  pb={2}
                  borderBottom={'1px solid'}
                  borderColor={'gray.400'}
                  width="100%"
                >
                  {value}
                </Text>
              ))}
            </Box>
          </Flex>
        </Grid>
        <Center mt={6}>
          <Box>
            <Center>
              <HStack spacing={4} transition="step-start">
                <IconButton
                  {...iconButtonStyles}
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                />
                <IconButton
                  {...iconButtonStyles}
                  aria-label="LinkedIn"
                  icon={<FaLinkedinIn />}
                />
                <IconButton
                  {...iconButtonStyles}
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                />
              </HStack>
            </Center>
            <Text
              fontSize={'sm'}
              mt={6}
              color={'white'}
              display={'inline-flex'}
              gap={1}
            >
              All Rights Reserves, MCD Pvt. Ltd.❤ Powered by
              <Text color={'telegram.500'}>Macmerise</Text>
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
