import { motion } from 'framer-motion';
import { Box, HStack, Icon, Text, useColorMode, VStack, useBreakpointValue } from '@chakra-ui/react';
import { FaHome, FaCode, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const FloatingNav = () => {
  const { colorMode } = useColorMode();
  
  // Show full navigation on larger screens, only up arrow on mobile
  const showFullNav = useBreakpointValue({ base: false, md: true });
  
  // Mobile positioning and sizing
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItems = [
    { icon: FaHome, label: 'Home', target: 'hero' },
    { icon: FaCode, label: 'Projects', target: 'projects' },
    { icon: FaEnvelope, label: 'Contact', target: 'footer' }
  ];

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      position="fixed"
      right={isMobile ? "20px" : "30px"}
      top={isMobile ? "auto" : "50%"}
      bottom={isMobile ? "20px" : "auto"}
      transform={isMobile ? "none" : "translateY(-50%)"}
      zIndex={999}
    >
      <VStack
        spacing={isMobile ? 2 : 3}
        p={isMobile ? 2 : 3}
        borderRadius="full"
        bg={colorMode === 'dark' ? 
          'rgba(255, 255, 255, 0.1)' : 
          'rgba(255, 255, 255, 0.9)'
        }
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor={colorMode === 'dark' ? 
          'rgba(255, 255, 255, 0.2)' : 
          'rgba(255, 255, 255, 0.4)'
        }
        boxShadow={colorMode === 'dark' ? 
          '0 8px 32px rgba(0, 0, 0, 0.3)' : 
          '0 8px 32px rgba(0, 0, 0, 0.1)'
        }
      >
        {/* Navigation items - only show on larger screens */}
        {showFullNav && navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              p={3}
              borderRadius="full"
              bg="transparent"
              _hover={{
                bg: colorMode === 'dark' ? 
                  'rgba(255, 255, 255, 0.1)' : 
                  'rgba(120, 40, 202, 0.1)'
              }}
              cursor="pointer"
              transition="all 0.3s ease"
              onClick={() => scrollToSection(item.target)}
              title={item.label}
            >
              <Icon 
                as={item.icon} 
                w={5} 
                h={5} 
                color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                _hover={{
                  color: colorMode === 'dark' ? 'white' : 'purple.500'
                }}
                transition="color 0.3s ease"
              />
            </Box>
          </motion.div>
        ))}

        {/* Scroll to top button - always visible */}
        <motion.div
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Box
            p={isMobile ? 2 : 3}
            borderRadius="full"
            bg="transparent"
            _hover={{
              bg: colorMode === 'dark' ? 
                'rgba(255, 255, 255, 0.1)' : 
                'rgba(120, 40, 202, 0.1)'
            }}
            cursor="pointer"
            transition="all 0.3s ease"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <Icon 
              as={FaArrowUp} 
              w={isMobile ? 4 : 5} 
              h={isMobile ? 4 : 5} 
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              _hover={{
                color: colorMode === 'dark' ? 'white' : 'purple.500'
              }}
              transition="color 0.3s ease"
            />
          </Box>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default FloatingNav;
