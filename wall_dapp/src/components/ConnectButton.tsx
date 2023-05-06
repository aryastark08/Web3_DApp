import { Button, Box, Text, Icon } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { MdWallet } from "react-icons/md";
// import Swapper from "./Swapper";
// import Props from "./AccountModal";

type ConnectButtonProps = {
  handleOpenModal: any;
};
export default function ConnectButton({ handleOpenModal }: ConnectButtonProps) {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box display="flex" alignItems="center" py="0">
      <Box px="3">
        <Text
          color="black"
          fontSize="20"
          fontWeight={"extrabold"}
          _hover={{ link: "./Swapper.tsx" }}
        >
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
        <Identicon />
      </Button>
      {/* <Swapper /> */}
    </Box>
  ) : (
    <Button
      leftIcon={<Icon as={MdWallet} color="currentColor" size="30px" />}
      variant="outline"
      onClick={handleConnectWallet}
    >
      Connect wallet
    </Button>
  );
}
