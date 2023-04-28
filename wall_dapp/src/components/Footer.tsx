/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={10} bg="gray.800" color="white">
      <Container maxW="container.xl">
        <Flex flexWrap="wrap">
          <Box flex="1 1 25%">
            <Heading size="md" mb={4}>
              Cryptnoid
            </Heading>
            <Text fontSize="sm" color="gray.400" px={1}>
              A company that specializes in Web3 development
            </Text>
          </Box>
          <Box flex="1 1 25%">
            <Heading size="sm" mb={4}>
              Links
            </Heading>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Home</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">About</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Services</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Contact</a>
            </Text>
          </Box>
          <Box flex="1 1 25%">
            <Heading size="sm" mb={4}>
              Social Media
            </Heading>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Twitter</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Facebook</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">Instagram</a>
            </Text>
            <Text fontSize="sm" color="gray.400">
              <a href="#">LinkedIn</a>
            </Text>
          </Box>
          <Box flex="1 1 25%">
            <Heading size="sm" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="sm" color="gray.400">
              Email: info@cryptnoid.com
            </Text>
            <Text fontSize="sm" color="gray.400">
              Phone: +1 (123) 456-7890
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
