import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(310);
  const [slider2Value, setSlider2Value] = useState(500);

  return (
    <>
      <Center>
        <Heading textAlign={'center'}>
          How rich is <br />
          considered“rich”?
        </Heading>
      </Center>
      <Box my={16}>
        <Center mb={2}>
          <Text fontSize={'sm'}>choose your number of followers</Text>
        </Center>
        <Flex gap={2} align={'center'} justify={'center'}>
          <Text>500</Text>
          <Slider
            onChange={val => setSlider2Value(val)}
            aria-label="slider-ex-2"
            colorScheme="pink"
            defaultValue={500}
            sx={{ width: '60%' }}
            min={1}
            max={1000}
          >
            <SliderMark
              value={slider2Value}
              textAlign="center"
              fontWeight={700}
              color="black"
              mt="8"
              ml="-6"
              w="12"
            >
              {slider2Value}K
            </SliderMark>
            <SliderTrack
              sx={{ height: '20px', borderRadius: '9999px' }}
              shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
            >
              <SliderFilledTrack
                shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
                sx={{
                  bgGradient: 'linear(to-r, cyan.200, cyan.500)',
                }}
              />
            </SliderTrack>
            <SliderThumb
              shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
              boxSize="24px"
              sx={{ h: '40px' }}
            />
          </Slider>
          <Text>1M</Text>
        </Flex>
      </Box>

      <Box>
        <Center mb={2}>
          <Text fontSize={'sm'}>choose your profit margin</Text>
        </Center>
        <Flex gap={2} align={'center'} justify={'center'}>
          <Text>200</Text>
          <Slider
            aria-label="slider-ex-2"
            colorScheme="pink"
            defaultValue={310}
            sx={{ width: '60%' }}
            onChange={val => setSliderValue(val)}
            min={200}
            max={600}
          >
            <SliderMark
              value={sliderValue}
              textAlign="center"
              fontWeight={700}
              color="black"
              mt="8"
              ml="-6"
              w="12"
            >
              {sliderValue}
            </SliderMark>
            <SliderTrack
              sx={{ height: '20px', borderRadius: '9999px' }}
              shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
            >
              <SliderFilledTrack
                shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
                sx={{
                  bgGradient: 'linear(to-r, yellow.200, yellow.500)',
                }}
              />
            </SliderTrack>
            <SliderThumb
              shadow={'inset 0 0 6px rgba(0, 0, 0, 0.5)'}
              boxSize="24px"
              sx={{ h: '40px' }}
            />
          </Slider>
          <Text>600</Text>
        </Flex>
      </Box>
      <Center>

        <Box>
        <Heading size={{base:'md',md:'lg'}} mt={20}>
          You could earn ₹50k to ₹50k*
        </Heading>
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
      </Center>
    </>
  );
};

export default SliderComponent;
