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
} from "@chakra-ui/react";

interface Asset {
  name: string;
  symbol: string;
  price: number;
  quantity: number;
  value: number;
}

function Portfolio() {
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
    <Box p={8}>
      <Heading size="lg" mb={4}>
        My Portfolio
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box>
          <Heading size="md" mb={2}>
            Add New Asset
          </Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={newAssetName}
              onChange={(e) => setNewAssetName(e.target.value)}
            />
          </FormControl>
          <FormControl id="symbol">
            <FormLabel>Symbol</FormLabel>
            <Input
              type="text"
              value={newAssetSymbol}
              onChange={(e) => setNewAssetSymbol(e.target.value)}
            />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price (USD)</FormLabel>
            <Input
              type="number"
              value={newAssetPrice}
              onChange={(e) => setNewAssetPrice(Number(e.target.value))}
            />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              value={newAssetQuantity}
              onChange={(e) => setNewAssetQuantity(Number(e.target.value))}
            />
          </FormControl>
          <Button onClick={addAsset} mt={4}>
            Add Asset
          </Button>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            My Assets
          </Heading>
          <Table variant="simple">
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
                <Tr key={asset.symbol}>
                  <Td>{asset.name}</Td>
                  <Td>{asset.symbol}</Td>
                  <Td>{asset.price}</Td>
                  <Td>{asset.quantity}</Td>
                  <Td>{asset.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
          </VStack>
        </Box>
        
    );
}
              export default Portfolio;
