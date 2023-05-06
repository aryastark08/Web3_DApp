import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdAccountCircle,
  MdPowerSettingsNew,
  MdSettings,
} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import {
  FaShoppingCart,
  FaBookOpen,
  FaTable,
  FaBookmark,
  FaUserCircle,
  FaRegEye,
} from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import w3_Logo from "../images/w3_Logo.jpg";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { FiHelpCircle } from "react-icons/fi";

function OpenSeaNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            w="100%"
            bgColor={"inherit"}
            outline={"none"}
          />
        </Flex>
      </Box>

      {/* Right Section */}
      <HStack spacing="4">
        <ConnectButton handleOpenModal={onOpen} />{" "}
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Menu>
          <MenuButton>
            <Avatar
              bg="gray.300"
              size="md"
              icon={
                <Icon as={MdAccountCircle} color="currentColor" size="md" />
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>
              {" "}
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaUserCircle />}
                size="sm"
              />
              Profile
            </MenuItem>
            <MenuItem>
              {" "}
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaRegEye />}
                size="sm"
              />
              Watchlist
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaTable />}
                size="sm"
              />
              <Link to="/portfolio" target="tab">
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaBookOpen />}
                size="sm"
              />
              Create
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<GiMonkey />}
                size="sm"
              />
              NFTs
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaBookOpen />}
                size="sm"
              />
              Learn
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FaBookmark />}
                size="sm"
              />
              Bookmark
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<MdSettings />}
                size="sm"
              />
              Settings
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<FiHelpCircle />}
                size="sm"
              />
              Help Center
            </MenuItem>
            <MenuItem>
              <IconButton
                aria-label="Book"
                background={"transparent"}
                icon={<MdPowerSettingsNew />}
                size="sm"
              />
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
      </HStack>
    </Flex>
  );
}

export default OpenSeaNavbar;
