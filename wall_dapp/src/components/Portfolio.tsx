// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
// import {
//   Box,
//   Heading,
//   SimpleGrid,
//   Flex,
//   Text,
//   ChakraProvider,
//   extendTheme,
//   Button,
// } from "@chakra-ui/react";
// import OpenSeaNavbar from "./OpenSeaNavbar";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

// // Create a custom theme
// const theme = extendTheme({
//   colors: {
//     brand: {
//       50: "#ffe6e6",
//       100: "#ffb3b3",
//       200: "#ff8080",
//       300: "#ff4d4d",
//       400: "#ff1a1a",
//       500: "#e60000",
//       600: "#b30000",
//       700: "#800000",
//       800: "#4d0000",
//       900: "#1a0000",
//     },
//     Flex: {
//       bg: "brand.100",
//     },
//   },
// });

// function Portfolio() {
//   return (
//     <ChakraProvider theme={theme}>
//       <OpenSeaNavbar />

//       <Box m={7} mb={10}>
//         <Button
//           bgColor={"#0BC5EA"}
//           fontSize={"2xl"}
//           textColor={"white"}
//           alignItems={"center"}
//           top={"10"}
//           height={"55"}
//           width={"58"}
//           _hover={{
//             borderStyle: "solid",
//             borderColor: "blue.400",
//             backgroundColor: "gray.700",
//           }}
//         >
//           <Link to={"/customportfolio"} rel="CustomPortfolio" target="blank">
//             Create Collection
//           </Link>
//         </Button>
//       </Box>
//       <Box p={8}>
//         <Box p={10} mt={10}>
//           <Heading
//             as="h1"
//             size="2xl"
//             mb={15}
//             bgColor={"blue.50"}
//             height={"75"}
//             pl={5}
//             pt={2}
//           >
//             Crypto Portfolio
//           </Heading>
//           <hr
//             style={{
//               width: "3",
//               color: "blue.50",
//             }}
//           />
//           <SimpleGrid
//             columns={{ base: 1, md: 2, lg: 3 }}
//             spacing={6}
//             mb={8}
//             mt={8}
//           >
//             {data.map((coin) => (
//               <Box
//                 key={coin.name}
//                 p={6}
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 overflow="hidden"
//                 backgroundColor={"white"}
//                 _hover={{ bgColor: "gray.50" }}
//                 transition={"ease-in-out"}
//               >
//                 <Flex justify="space-between" mb={2}>
//                   <Heading as="h3" size="md">
//                     {coin.name}
//                   </Heading>
//                   <Text fontSize="lg" fontWeight="bold">
//                     {coin.amount.toLocaleString()}
//                   </Text>
//                 </Flex>
//                 <Flex justify="space-between" mb={4}>
//                   <Text fontSize="xl">${coin.value.toLocaleString()}</Text>
//                   <Flex alignItems="center">
//                     {coin.change > 0 ? (
//                       <FiArrowUp
//                         color="green.500"
//                         strokeWidth={3}
//                         size={20}
//                         style={{
//                           color: "green",
//                         }}
//                       />
//                     ) : (
//                       <FiArrowDown
//                         color="red.500"
//                         strokeWidth={3}
//                         size={20}
//                         style={{
//                           color: "red",
//                         }}
//                       />
//                     )}
//                     <Text ml={1} fontSize="md" fontWeight="bold">
//                       {Math.abs(coin.change)}%
//                     </Text>
//                   </Flex>
//                 </Flex>
//                 <Text fontSize="md" color="blue.700">
//                   Total Value: ${(coin.amount * coin.value).toLocaleString()}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Box>
//       </Box>
//       <Footer />
//     </ChakraProvider>
//   );
// }
// export default Portfolio;
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Spinner,
  Text,
  VStack,
  theme,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Web3 from "web3";
import axios from "axios";
import OpenSeaNavbar from "./OpenSeaNavbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

interface NftData {
  name: string;
  image: string;
  tokenId: string;
}

interface Props {
  address: string;
  contractAddress: string;
}

const Portfolio: React.FC<Props> = ({ address, contractAddress }) => {
  const [nftData, setNftData] = useState<NftData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNfts = async () => {
      try {
        const web3 = new Web3(Web3.givenProvider);
        const contractAddress = "0x..."; // Replace with the address of the NFT contract
        const etherscanApiKey = "your_etherscan_api_key"; // Replace with your Etherscan API key
        const apiUrl = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${etherscanApiKey}`;

        const response = await axios.get(apiUrl);
        const contractAbi = JSON.parse(response.data.result);
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const balance = await contract.methods.balanceOf(address).call();
        const nftData: NftData[] = [];

        for (let i = 0; i < balance; i++) {
          const tokenId = await contract.methods
            .tokenOfOwnerByIndex(address, i)
            .call();
          const tokenUri = await contract.methods.tokenURI(tokenId).call();
          const response = await fetch(tokenUri);
          const data = await response.json();
          nftData.push({
            name: data.name,
            image: data.image,
            tokenId: tokenId.toString(),
          });
        }

        setNftData(nftData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (address) {
      getNfts();
    }
  }, [address, contractAddress]);

  return (
    <ChakraProvider theme={theme}>
      <OpenSeaNavbar />
      <Box m={7} mb={10}>
        <Button
          bgColor={"#0BC5EA"}
          fontSize={"2xl"}
          textColor={"white"}
          alignItems={"center"}
          top={"10"}
          height={"55"}
          width={"58"}
          _hover={{
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
        >
          <Link to={"/customportfolio"} rel="CustomPortfolio" target="blank">
            Create Collection
          </Link>
        </Button>
      </Box>
      <Box>
        {isLoading ? (
          <Center h="100px">
            <Spinner />
            &nbsp; &nbsp; <Text>No NFTs found.</Text>
          </Center>
        ) : nftData.length > 0 ? (
          <VStack spacing="4">
            {nftData.map((nft) => (
              <Box
                key={nft.tokenId}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="full"
                maxW="sm"
                position="relative"
              >
                <img src={nft.image} alt={nft.name} />
                <Box p="4">
                  <Text fontWeight="bold" fontSize="2xl">
                    {nft.name}
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt="2"
                  >
                    <Text fontSize="lg">Token ID: {nft.tokenId}</Text>
                    <a
                      href={`https://opensea.io/assets/${contractAddress}/${nft.tokenId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </Box>
                </Box>
              </Box>
            ))}
          </VStack>
        ) : (
          <Text>No NFTs found.</Text>
        )}
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default Portfolio;
