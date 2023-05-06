import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Footer from "./Footer";
import OpenSeaNavbar from "./OpenSeaNavbar";

interface Asset {
  name: string;
  symbol: string;
  price: number;
  quantity: number;
  value: number;
}

function CustomPortfolio() {
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
      },
      Flex: {
        bg: "brand.100",
      },
    },
  });
  const [assets, setAssets] = useState<Asset[]>([]);
  const [newAssetName, setNewAssetName] = useState("");
  const [newAssetSymbol, setNewAssetSymbol] = useState("");
  const [newAssetPrice, setNewAssetPrice] = useState(0);
  const [newAssetQuantity, setNewAssetQuantity] = useState(0);

  const addAsset = () => {
    const newAsset = {
      name: newAssetName,
      symbol: newAssetSymbol,
      price: newAssetPrice,
      quantity: newAssetQuantity,
      value: newAssetPrice * newAssetQuantity,
    };
    setAssets([...assets, newAsset]);
    setNewAssetName("");
    setNewAssetSymbol("");
    setNewAssetPrice(0);
    setNewAssetQuantity(0);
  };

  return (
    <ChakraProvider theme={theme}>
      <OpenSeaNavbar />
      <Box p={8} mb={10}>
        <Heading size="3xl" mb={10}>
          Portfolio
        </Heading>

        <VStack spacing={7} align="stretch">
          <Box>
            <Heading size="md" mb={5}>
              Add New Asset
            </Heading>
            <FormControl id="name" mb={5}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={newAssetName}
                onChange={(e) => setNewAssetName(e.target.value)}
              />
            </FormControl>
            <FormControl id="symbol" mb={5}>
              <FormLabel>Symbol</FormLabel>
              <Input
                type="text"
                value={newAssetSymbol}
                placeholder="ETH"
                onChange={(e) => setNewAssetSymbol(e.target.value)}
              />
            </FormControl>
            <FormControl id="price" mb={5}>
              <FormLabel>Price (USD)</FormLabel>
              <Input
                type="number"
                value={newAssetPrice.toString()}
                placeholder="$"
                onChange={(e) => setNewAssetPrice(Number(e.target.value))}
              />
            </FormControl>
            <FormControl id="quantity" mb={5}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                maxLength={3000}
                value={newAssetQuantity.toString()}
                onChange={(e) => setNewAssetQuantity(Number(e.target.value))}
              />
            </FormControl>
            <Button
              onClick={addAsset}
              mt={4}
              bgColor={"telegram.400"}
              textColor={"white"}
            >
              Add Asset
            </Button>
          </Box>

          <Box>
            <Heading size="2xl" mb={10} mt={4}>
              My Assets
            </Heading>
            <Table variant="simple" colorScheme="blue" size="md">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Symbol</Th>
                  <Th>Price (USD)</Th>
                  <Th>Quantity</Th>
                  <Th>Value (USD)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {assets.map((asset) => (
                  <Tr
                    key={asset.symbol}
                    _hover={{ backgroundColor: "blue.50" }}
                  >
                    <Td>{asset.name}</Td>
                    <Td>{asset.symbol}</Td>
                    <Td>${asset.price.toFixed(2)}</Td>
                    <Td>{asset.quantity}</Td>
                    <Td>${asset.value.toFixed(2)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default CustomPortfolio;
