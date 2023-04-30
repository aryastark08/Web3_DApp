import { Box, Container} from "@chakra-ui/react";
// import ConnectButton from "./ConnectButton";
import backgrd from "../images/backgrd.png"


export default function Hero() {
  return (
    <div style={{
      width: '100%', height: '100%',
      backgroundImage: `url(${backgrd})`,
      backgroundPosition: 'center', display: "flex",
      backgroundRepeat: 'no-repeat', backgroundSize:'cover'
    
    }} >
  
      <Container maxW="container.xl" h="50%" display="flex" alignItems="center" justifyContent="start">
        <Box textAlign="left">
          <Box as="h1" fontSize="7xl" fontWeight="bold" mb={6} ms={0} ps={0} color={'#ffffff'}>
            Welcome to <br /> Cryptnoid!

          </Box>
          <Box as="p" fontSize="xl" fontWeight="semibold" color="#FFF5F5" mb={8}>
  Empowering the future of decentralized finance
</Box>

        </Box>
      </Container>

      </div>
  );
}
