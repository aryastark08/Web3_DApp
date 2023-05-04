import { Box, useDisclosure } from "@chakra-ui/react";
import OpenSeaNavbar from "./OpenSeaNavbar";
import AccountModal from "./AccountModal";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onClose } = useDisclosure();
  function handleOpenModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box minH="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <OpenSeaNavbar handleOpenModal={handleOpenModal} /><AccountModal isOpen={isOpen} onClose={onClose}/>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
