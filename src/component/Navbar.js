import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Button,
  IconButton,
  Avatar,
  Link,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  MenuButton,
  MenuGroup,
  MenuDivider,
  MenuItem,
  Menu,
  MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../img/logo.svg';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen width is less than 768px (mobile breakpoint)
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add event listener to check for screen width changes
  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p="1rem"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      px={['1rem', '2rem']} // Adjust padding for smaller screens
    >
      <Box>
        <Image src={Logo} alt="Logo" h="30px" />
      </Box>

      {isMobile ? (
        <>
          {/* Hamburger icon for mobile */}
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Menu"
            onClick={onOpen}
            variant="ghost"
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap={4}>
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/resources">Resources</Link>
                  <Link href="/use-cases">Use Cases</Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        // Navigation links for desktop
        <Flex align="center" justify="center" gap={16}>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/use-cases">Use Cases</Link>
        </Flex>
      )}

      {!isMobile && ( // Show only on desktop
        <Flex gap={4} align={'center'}>
          <Button
            bgGradient="linear(to-r, purple.400, purple.700)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, purple.500, purple.800)',
            }}
            rounded={'full'}
          >
            Join the Waitlist
          </Button>

          <Menu>
            <MenuButton>
              <Avatar
                size="sm"
                bg={'gray.300'}
                name="User"
                src="/user-avatar.png"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
