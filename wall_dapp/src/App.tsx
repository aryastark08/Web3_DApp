import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import "./App.css"
import { Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Heading as='h2' size='3xl' noOfLines={1}>
    (3xl) In love with React & Next
  </Heading>
      <Layout>
        <Box bgGradient='linear(to-l, #7928CA, #FF0080)' height={1000} width={"xl"} alignContent={"center"} textAlign={"center"} verticalAlign={"center"}>
        <header className="App-header" style={{ color: "white" }}>
          Account: XXXXXX765XXXXX
          <br />
          Bank Balance: 0.0002 ETH
        </header>
        <br />  
          <ConnectButton />
          </Box>
      </Layout>
    </ChakraProvider>
  )
}
