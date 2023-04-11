import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Main />
        <Footer />
      </ChakraProvider>
    </div>
  );
}


export default App;