import { Box, Text, VStack, HStack, Icon, Link, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/AungZawMyo97',
      color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
      hoverColor: 'purple.400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aung-zaw-myo-0984a6196/',
      color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
      hoverColor: 'blue.400'
    },
    {
      icon: FaYoutube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@original_oppai',
      color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
      hoverColor: 'blue.400'
    }
  ];

  return (
    <Box
      id="footer"
      as="footer"
      py={12}
      bg={colorMode === 'dark' ? 
        'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' : 
        'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }
      borderTop="1px solid"
      borderColor={colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="400px"
        height="400px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'rgba(120, 40, 202, 0.05)' : 'rgba(120, 40, 202, 0.03)'}
        filter="blur(100px)"
        zIndex={0}
      />

      <Box position="relative" zIndex={1}>
        <VStack spacing={8} align="center">
          {/* Main footer content */}
          <VStack spacing={6} align="center" maxW="600px" textAlign="center">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
            >
              Let's Connect!
            </Text>
            <Text
              fontSize="lg"
              color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
              maxW="500px"
            >
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology and gaming.
            </Text>
          </VStack>

          {/* Social links */}
          <HStack spacing={8} justify="center">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                <VStack
                  spacing={2}
                  p={4}
                  borderRadius="xl"
                  bg={colorMode === 'dark' ? 
                    'rgba(255, 255, 255, 0.05)' : 
                    'rgba(255, 255, 255, 0.8)'
                  }
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor={colorMode === 'dark' ? 
                    'rgba(255, 255, 255, 0.1)' : 
                    'rgba(255, 255, 255, 0.4)'
                  }
                  _hover={{
                    transform: 'translateY(-5px) scale(1.05)',
                    bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
                    boxShadow: `0 10px 25px rgba(${social.hoverColor === 'purple.400' ? '120, 40, 202' : '59, 130, 246'}, 0.3)`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                  width="80px"
                  height="80px"
                  justifyContent="center"
                >
                  <Icon 
                    as={social.icon} 
                    w={6} 
                    h={6} 
                    color={social.color}
                    transition="color 0.3s ease"
                    _groupHover={{ color: social.hoverColor }}
                  />
                  <Text 
                    fontSize="xs" 
                    fontWeight="medium" 
                    color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                  >
                    {social.label}
                  </Text>
                </VStack>
              </Link>
            ))}
          </HStack>

          {/* Divider */}
          <Box
            height="1px"
            width="60%"
            bgGradient="linear(to-r, transparent, #7928CA, #FF0080, transparent)"
            borderRadius="full"
          />

          {/* Copyright and credits */}
          <VStack spacing={4} align="center">
            <Text
              fontSize="md"
              textAlign="center"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="bold"
            >
              Designed & Built by Oppai The Original
            </Text>
            <HStack spacing={2} align="center">
              <Text
                fontSize="sm"
                color={colorMode === 'dark' ? 'gray.500' : 'gray.500'}
              >
                © {currentYear} All rights reserved
              </Text>
              <Icon as={FaHeart} color="red.400" w={3} h={3} />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;