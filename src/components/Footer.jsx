import { Box, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      py={4}
      bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
    >
      <Text
        fontSize="sm"
        textAlign="center"
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
        fontWeight="medium"
      >
        Designed by Oppai The Original • © {currentYear}
      </Text>
    </Box>
  );
};

export default Footer;