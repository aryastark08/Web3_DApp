import React from 'react';
import { Flex, Box, Spacer, Link, Button } from '@chakra-ui/react';

interface NavbarProps {
  // Add any props that the Navbar component may need
}



const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg="white" boxShadow="sm" py={2} px={4} alignItems="center">
      <Box>
        <Link href="/" fontSize="50" fontWeight="bold" color="blue.800">Cryptnoid</Link>
      </Box>
      <Spacer />
      <Box>
      <Link href="#" mr={4} fontSize="lg" color="gray.500" padding='10px' _hover={{bg: 'gray.100', textDecoration: 'none'}} _focus={{outline: 'none'}}>
  Features
</Link>
<Link href="#" mr={4} fontSize="lg" color="gray.500" padding='10px' _hover={{bg: 'gray.100', textDecoration: 'none'}} _focus={{outline: 'none'}}>
  Pricing
</Link>

        <Button colorScheme="red" size="md" fontSize="lg" marginEnd={8}>Sign Up</Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
