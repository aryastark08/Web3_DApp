// import { ChakraProvider, useColorMode, useDisclosure } from "@chakra-ui/react";
// import { useState } from "react";
// import Layout from "./components/Layout";
// import ConnectButton from "./components/ConnectButton";
// import AccountModal from "./components/AccountModal";
// import MainContent from "./components/MainContent";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// function App() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { toggleColorMode } = useColorMode();
//   const [colorMode, setColorMode] = useState<string>("light");

//   const handleColorModeToggle = () => {
//     setColorMode(colorMode === "light" ? "dark" : "light");
//     toggleColorMode();
//   };

//   function handleOpenModal(): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <ChakraProvider>
//       <Layout toggleColorMode={handleColorModeToggle} colorMode={"light"}>
//         <Hero toggleColorMode={handleColorModeToggle} colorMode={"light"}></Hero>
//         <ConnectButton handleOpenModal={handleOpenModal}  />

//         <MainContent />
//         <AccountModal isOpen={isOpen} onClose={onClose} />
//         <Footer />
//       </Layout>
//     </ChakraProvider>
//   );
// }

// export default App;


import { ChakraProvider,theme } from "@chakra-ui/react"; /*, useDisclosure */
import Layout from "./components/Layout";
// import ConnectButton from "./components/ConnectButton";
// import AccountModal from "./components/AccountModal";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  // Pull the disclosure methods
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Hero />
        {/* // Our connect button will only handle opening */}
        {/* <ConnectButton handleOpenModal={onOpen} /> */}
        {/* // Our Account modal will handle open state & closing */}
        {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
        <MainContent/>
        <Footer/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;