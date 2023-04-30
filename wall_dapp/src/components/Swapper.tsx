import { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

interface Token {
  symbol: string;
  address: string;
}

const TOKENS: Token[] = [
  { symbol: "ETH", address: "0x0000000000000000000000000000000000000000" },
  { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F" },
  { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
];

const Swapper = () => {
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [targetToken, setTargetToken] = useState<Token | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(parseFloat(event.target.value));
  };

  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const address = event.target.value;
    const token = TOKENS.find((t) => t.address === address);
    setTargetToken(token || null);
  };

  const handleSwap = () => {
    if (!targetToken) {
      return;
    }

    // TODO: Perform swap calculation here
  };

  return (
    <Box maxW="md" mx="auto" my={8} p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="2xl" mb={4} fontWeight="bold">
        Token Swapper
      </Text>

      <Input
        type="number"
        placeholder="Enter input amount"
        value={inputAmount}
        onChange={handleInputChange}
        mb={4}
      />

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>
          Select target token:
        </Text>
        <select onChange={handleTokenChange}>
          <option value="">Select a token</option>
          {TOKENS.map((token) => (
            <option key={token.address} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </Box>

      {targetToken && (
        <Box>
          <Text fontWeight="bold" mb={2}>
            Output:
          </Text>
          <Text>
            You would receive {inputAmount * 100} {targetToken.symbol}
          </Text>
        </Box>
      )}

      <Button mt={4} onClick={handleSwap} isDisabled={!targetToken}>
        Swap
      </Button>
    </Box>
  );
};

export default Swapper;
