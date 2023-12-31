import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";
import MainRoute from "./Routes/MainRoute";
import Footer from "./0603/Components/Footer/Footer";
import Navbar from "./0603/Components/NavBar";
// import "./1265/src/App.css"
function App() {
  const {colorMode, toggleColorMode} = useColorMode() 
  return (
    <Container
      background={useColorModeValue("root.black", "#f3f3f3")}
      color={useColorModeValue("root.white", "root.black")}
      maxW={"container.2xl"}
      p='0'
    >
      {/* // navbar */}
      <Navbar/>
      {/* <button onClick={toggleColorMode}>Toggle Color Mode</button> */}
      <MainRoute />
      {/* // footer */}
      <Footer/>
    </Container>
  );
}
export default App;
