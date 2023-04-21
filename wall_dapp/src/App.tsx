import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";

export default function App() {
  return (
    <ChakraProvider>
      <Layout>
        <p style={{ color: "black" }}>Hello, world!</p>
      </Layout>
    </ChakraProvider>
  )
}

<Layout>
  <ConnectButton />
</Layout>