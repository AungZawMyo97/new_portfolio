import { Box, useColorMode } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top="20px"
      right="20px"
      zIndex={1000}
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleColorMode}
        style={{
          position: 'relative',
          width: '70px',
          height: '35px',
          borderRadius: '25px',
          backgroundColor: colorMode === 'dark' ? '#1a1b1e' : '#87CEEB',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <motion.div
          animate={{
            x: colorMode === 'dark' ? 35 : 0,
            rotate: colorMode === 'dark' ? 180 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '31px',
            height: '31px',
            borderRadius: '50%',
            backgroundColor: colorMode === 'dark' ? '#1a1b1e' : '#FFD700',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: colorMode === 'dark' ? '#ffffff' : '#1a1b1e'
          }}
        >
          {colorMode === 'dark' ? <FaMoon size={16} /> : <FaSun size={16} />}
        </motion.div>
        <AnimatePresence mode="wait">
          {colorMode === 'dark' ? (
            <motion.div
              key="stars"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <Box
                as="span"
                position="absolute"
                right="8px"
                top="8px"
                width="2px"
                height="2px"
                borderRadius="50%"
                bg="white"
                boxShadow="0 0 2px #fff, 0 0 4px #fff"
              />
              <Box
                as="span"
                position="absolute"
                right="15px"
                top="12px"
                width="3px"
                height="3px"
                borderRadius="50%"
                bg="white"
                boxShadow="0 0 2px #fff, 0 0 4px #fff"
              />
            </motion.div>
          ) : (
            <motion.div
              key="clouds"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <Box
                as="span"
                position="absolute"
                right="15px"
                top="8px"
                width="15px"
                height="8px"
                borderRadius="10px"
                bg="white"
                opacity="0.8"
              />
              <Box
                as="span"
                position="absolute"
                right="25px"
                top="15px"
                width="12px"
                height="6px"
                borderRadius="10px"
                bg="white"
                opacity="0.6"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </Box>
  );
};

export default ThemeToggle;