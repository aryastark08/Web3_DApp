import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, HStack, IconButton, Text, Avatar, Menu, MenuButton, MenuItem, MenuList, Icon, Button } from "@chakra-ui/react";
import { MdAccountCircle, MdWallet } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
// import Swapper from "./Swapper";
import { FaShoppingCart } from "react-icons/fa";
import w3_Logo from "../images/w3_Logo.jpg";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { useEthers, useEtherBalance } from "@usedapp/core";

interface OpenSeaNavbarProps {
  handleOpenModal: () => void;
}

const OpenSeaNavbar = ({ handleOpenModal }: OpenSeaNavbarProps) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const [, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    activateBrowserWallet();
    setWalletConnected(true);
  };

    account ? (
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
          <Identicon />
        </Button>
      </Box>) : (<Button leftIcon={<Icon as={MdWallet} color="currentColor" size="24px" />} variant="outline" onClick={handleConnectWallet}>
        Connect wallet
      </Button>);
    return (
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        h="80px"
        px="6"
        bgColor="white"
        borderBottom="1px solid #E5E5E5"
      >
        {/* Left Section */}
        <Flex align="center">
          <IconButton
            aria-label="Menu"
            icon={<AiOutlineMenu />}
            size="lg"
            mr="6"
            display={{ base: "block", md: "none" }}
          />
          <Box
            mr="4"
            display={{ base: "none", md: "block" }}
            borderRadius="full"
            w="40px"
            h="40px"
            bgImage={w3_Logo}
          ></Box>
          <HStack spacing="4">
            <Text fontWeight="bold" fontSize="xl" color="gray.800">
              Cryptnoid
            </Text>
          </HStack>
        </Flex>

        {/* Middle Section */}
        <Box w={{ base: "full", md: "50%" }} maxW="600px">
          <Flex
            align="center"
            w="100%"
            h="full"
            bgColor="gray.100"
            borderRadius="full"
            px="4"
          >
            <IconButton
              aria-label="Search"
              icon={<IoSearch />}
              size="lg"
              variant="ghost"
              borderRadius="full"
              mr="2"
            />
            <Box
              as="input"
              placeholder="Search for items, collections, and accounts"
              w="full"
              bgColor={"inherit"}
              border={"none"}
            />
          </Flex>
        </Box>

        {/* Right Section */}
        <HStack spacing="4">
          {/* {!walletConnected ? ( */}
          <Button leftIcon={<Icon as={MdWallet} color="currentColor" size="24px" />} variant="outline" onClick={handleConnectWallet}>
            Connect wallet
          </Button>
          <Menu>
            <MenuButton>
              <Avatar bg="gray.300" size="md" icon={<Icon as={MdAccountCircle} color="currentColor" size="5em" />} />
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem><Link to="/portfolio" target="tab">Portfolio</Link></MenuItem>
              <MenuItem>Option 4</MenuItem>
              <MenuItem>Option 5</MenuItem>
              <MenuItem>Option 6</MenuItem>
              <MenuItem>Option 7</MenuItem>
              <MenuItem>Option 8</MenuItem>
              <MenuItem>Option 9</MenuItem>
              <MenuItem>Option 10</MenuItem>
            </MenuList>
          </Menu>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
        </HStack>
      </Flex>
    );
  };

  export default OpenSeaNavbar;
