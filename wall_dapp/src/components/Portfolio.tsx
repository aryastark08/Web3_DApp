import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import {
  Box,
  Heading,
  SimpleGrid, Flex, Text, ChakraProvider, extendTheme, Button, useDisclosure
} from "@chakra-ui/react";
import CustomPortfolio from './CustomPortfolio';
import OpenSeaNavbar from './OpenSeaNavbar';
import AccountModal from './AccountModal';
import Footer from './Footer';



// Create a custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffe6e6",
      100: "#ffb3b3",
      200: "#ff8080",
      300: "#ff4d4d",
      400: "#ff1a1a",
      500: "#e60000",
      600: "#b30000",
      700: "#800000",
      800: "#4d0000",
      900: "#1a0000",
    }, Flex: {
      bg: "brand.100"
    }
  },
});


const data = [
  { name: 'Bitcoin', amount: 1.23, value: 50000, change: 2.3 },
  { name: 'Ethereum', amount: 10.12, value: 3000, change: -1.8 },
  { name: 'Cardano', amount: 500, value: 1.5, change: 5.6 },
  { name: 'Solana', amount: 50, value: 50, change: 3.2 },
  { name: 'Dogecoin', amount: 1234.56, value: 0.3, change: -0.7 },
];


function handleOpenModal(): void {
  throw new Error("Function not implemented.");
}

function Portfolio() {
  
  const { isOpen, onClose } = useDisclosure();
 

  return (
    <ChakraProvider theme={theme}>
      <OpenSeaNavbar handleOpenModal={handleOpenModal} /><AccountModal isOpen={isOpen} onClose={onClose}/>
      
      <Box m={7} mb={10}>
        <Button onClick={CustomPortfolio} bgColor={"#0BC5EA"} fontSize={"2xl"} textColor={"white"} alignItems={"center"} top={"10"} height={"55"} width={"58"}
          _hover={
          { borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",}
        }
        >Create Portfolio</Button></Box>
    <Box p={8}>
      

     <Box p={10} mt={10} bgColor={"#CBD5E0"}>
     <Heading as="h1" size="2xl" mb={15}>
       Crypto Portfolio
          </Heading>
          <hr style={{
            width:"3"}} />
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8} mt={8}>
       {data.map((coin) => (
         <Box
           key={coin.name}
           p={6}
           borderWidth="1px"
           borderRadius="lg"
           overflow="hidden"
           backgroundColor={"white"}
         >
           <Flex justify="space-between" mb={2} >
             <Heading as="h3" size="md">
               {coin.name}
             </Heading>
             <Text fontSize="lg" fontWeight="bold">
               {coin.amount.toLocaleString()}
             </Text>
           </Flex>
           <Flex justify="space-between" mb={4}>
             <Text fontSize="xl">${coin.value.toLocaleString()}</Text>
             <Flex alignItems="center">
               {coin.change > 0 ? (
                 <FiArrowUp color="green.500" strokeWidth={3} size={20}  style={{
                   color:"green"
                 }} />
               ) : (
                 <FiArrowDown color="red.500" strokeWidth={3} size={20} style={{
                  color:"red"
                }} />
               )}
               <Text ml={1} fontSize="md" fontWeight="bold">
                 {Math.abs(coin.change)}%
               </Text>
             </Flex>
           </Flex>
           <Text fontSize="md" color="blue.700">
             Total Value: ${(coin.amount * coin.value).toLocaleString()}
           </Text>
         </Box>
       ))}
     </SimpleGrid>
   </Box>
  </Box>
    <Footer/>
    </ChakraProvider>
    );
}
              export default Portfolio;
