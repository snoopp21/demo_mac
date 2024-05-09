import { Grid, Heading, Image, Flex } from '@chakra-ui/react';
import Disney from '../img/disney.svg';
import Fifa from '../img/fifa.svg';
import Harry from '../img/harrypotter.svg';
import Marvel from '../img/marvel.svg';
import Jim from '../img/jimbeam.svg';

const brands = [
  { src: Disney },
  { src: Fifa },
  { src: Harry },
  { src: Marvel },
  { src: Jim },
];

const Brands = () => {
  return (
    <>
      <Heading textAlign={'center'} mt={12}>
        Trusted by <br /> hundreds of brands
      </Heading>
      <Flex mt={12} gap={16} justify={'center'} flexWrap={'wrap'}>
        {/* First set of images */}
        {brands.map((brand, index) => (
          <Image key={index} src={brand.src} w={'125px'} />
        ))}
      </Flex>
      <Flex mt={12} gap={16} justify={'center'} flexWrap={'wrap'}>
        {/* Second set of images (reversed) */}
        {brands
          .slice()
          .reverse()
          .map((brand, index) => (
            <Image key={index} src={brand.src} w={'125px'} />
          ))}
      </Flex>
    </>
  );
};

export default Brands;
