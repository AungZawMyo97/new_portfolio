import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <CSSReset />
        <Box overflowX="hidden">
          <ThemeToggle />
          <Hero />
          <Projects />
          <Footer />
          <FloatingNav />
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
