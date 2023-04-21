import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  async function handleConnectWallet() {
    const result: { account?: string } | void = await activateBrowserWallet();
    if (result && result.account) {
      setAccount(result.account);
    }
  }

  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {etherBalance && JSON.stringify(etherBalance)} ETH
      </Text>
    </Box>
  ) : (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
}