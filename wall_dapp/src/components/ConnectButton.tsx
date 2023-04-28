import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
// import Props from "./AccountModal";

interface ConnectButtonProps {
  handleOpenModal: () => void;
}

export default function ConnectButton({ handleOpenModal }: ConnectButtonProps) {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="#FFF5F5"
      height={'16'}
      // borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="black" fontSize="32" fontWeight={'extrabold'}>
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
       onClick={handleOpenModal}
       bg="gray.800"
       border="1px solid transparent"
       _hover={{
         border: "1px",
         borderStyle: "solid",
         borderColor: "blue.400",
         backgroundColor: "gray.700",
       }}
       borderRadius="xl"
       m="1px"
       px={3}
        height="38px"  
        
      >
        <Identicon/>
      </Button>
    </Box>
  ) : (
    <Button 
    height="50"
        border="1px solid transparent"
    fontSize="2xl"   bg="#1A365D" textColor={'white'}  position="absolute"
    top="45%"
    left="30%"
    transform="translate(-50%, -50%)" onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
}
