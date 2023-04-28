import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";


type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
