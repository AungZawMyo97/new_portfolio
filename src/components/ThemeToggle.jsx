import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}
    >
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        variant="ghost"
        color={colorMode === 'dark' ? 'orange.300' : 'purple.600'}
        _hover={{
          bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'
        }}
        size="lg"
      />
    </motion.div>
  );
};

export default ThemeToggle;