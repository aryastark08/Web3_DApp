import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

interface MainContentProps {
  // Add any props that the MainContent component may need
}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" fontSize="4xl" mb={10} textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Invest in Cryptocurrencies
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ultricies metus vitae rutrum. Sed rhoncus augue a tellus maximus, eget convallis elit accumsan.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Secure Wallet Storage
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ultricies metus vitae rutrum. Sed rhoncus augue a tellus maximus, eget convallis elit accumsan.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Portfolio Management
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ultricies metus vitae rutrum. Sed rhoncus augue a tellus maximus, eget convallis elit accumsan.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Trading Tools
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ultricies metus vitae rutrum. Sed rhoncus augue a tellus maximus, eget convallis elit accumsan.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default MainContent;
