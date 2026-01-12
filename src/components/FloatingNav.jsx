import { motion } from 'framer-motion';
import { Box, HStack, Icon, Text, useColorMode, VStack, Tooltip } from '@chakra-ui/react';
import { FaHome, FaCode, FaEnvelope, FaArrowUp, FaBriefcase } from 'react-icons/fa';

const FloatingNav = () => {
  const { colorMode } = useColorMode();

  const navItems = [
    { icon: FaHome, label: 'Home', target: 'hero' },
    { icon: FaBriefcase, label: 'Experience', target: 'experience' },
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
      left="20px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={100}
      display={{ base: 'none', md: 'block' }}
    >
      <VStack
        spacing={6}
        p={4}
        borderRadius="full"
        className="glass"
      >
        {navItems.map((item, index) => (
          <Tooltip key={index} label={item.label} placement="right" hasArrow bg="pink.500">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.target)}
              style={{ cursor: 'pointer' }}
            >
              <Icon
                as={item.icon}
                w={5}
                h={5}
                color={colorMode === 'dark' ? "gray.400" : "gray.600"}
                _hover={{ color: '#FF0080' }}
                transition="color 0.2s"
              />
            </motion.div>
          </Tooltip>
        ))}

        <Box w="20px" h="1px" bg="gray.700" opacity={0.3} />

        <Tooltip label="Scroll Top" placement="right" hasArrow bg="purple.500">
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          >
            <Icon
              as={FaArrowUp}
              w={4}
              h={4}
              color={colorMode === 'dark' ? "gray.500" : "gray.400"}
              _hover={{ color: '#7928CA' }}
            />
          </motion.div>
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default FloatingNav;
