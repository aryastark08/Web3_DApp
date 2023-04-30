import React, { useState, useEffect } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { MdWallet } from "react-icons/md";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers'
import { injected } from "../connectors";
import Swapper from "./Swapper";


const ConnectWalletButton = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const { context, account, activate } = useWeb3React<Web3Provider>();
  
    useEffect(() => {
      if (context?.active && account) {
        setWalletConnected(true);
      } else {
        setWalletConnected(false);
      }
    }, [context, account]);
  
    const handleConnectWallet = async () => {
      try {
        await activate(injected);
      } catch (ex) {
        console.error(ex);
      }
    };
  
    const connectWalletPrompt = async () => {
      try {
        await activate(injected, undefined, true);
      } catch (ex) {
        console.error(ex);
      }
    };
  
    return (
      <>
        {!walletConnected ? (
          <Button
            leftIcon={<Icon as={MdWallet} color="currentColor" size="24px" />}
            variant="outline"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        ) : (
          <Swapper />
        )}
      </>
    );
  };
  
  export default ConnectWalletButton;