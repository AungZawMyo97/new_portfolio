import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorMode, Image } from '@chakra-ui/react';
import { FaTwitch, FaYoutube, FaCode, FaGamepad } from 'react-icons/fa';
import personalLogo from '../assets/personal_logo.png';

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg={colorMode === 'dark' ? 
        "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" :
        "linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)"
      }
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: colorMode === 'dark' ?
          'radial-gradient(circle at 50% 50%, rgba(128, 0, 128, 0.1) 0%, transparent 50%)' :
          'radial-gradient(circle at 50% 50%, rgba(128, 0, 128, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
      overflow="hidden"
    >
      <Container maxW="container.lg" px={4} py={8} textAlign="center">
        <VStack spacing={8} align="center" textAlign="center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 1, 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src={personalLogo}
              alt="Personal Logo"
              width="120px"
              height="120px"
              objectFit="contain"
              borderRadius="full"
              boxShadow={colorMode === 'dark' ? '0 0 15px rgba(255, 255, 255, 0.2)' : '0 0 15px rgba(0, 0, 0, 0.1)'}
              filter={colorMode === 'dark' ? 'brightness(1)' : 'brightness(0.9)'}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: colorMode === 'dark' ? '0 0 20px rgba(255, 255, 255, 0.3)' : '0 0 20px rgba(0, 0, 0, 0.15)'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, #FF0080, #7928CA)"
              bgClip="text"
              fontWeight="extrabold"
              mb={4}
              lineHeight={1.5}
            >
              Aung Zaw Myo
            </Heading>
            <Text fontSize="2xl" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mt={4}>
              aka 
              <br />
              <Text as="span" fontWeight="bold" color="purple.400">
                Oppai The Original 
              </Text>
            </Text>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Text fontSize="xl" maxW="700px" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} mb={4}>
              Full Stack Developer & Gaming Content Creator
            </Text>
            <Text fontSize="md" maxW="700px" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} lineHeight="tall">
              Passionate about crafting elegant web solutions and creating engaging gaming content.
              With expertise in modern web technologies and a love for gaming,
              I bring a unique blend of technical skills and creative entertainment.
            </Text>
          </motion.div>

          <Box width="100%" maxW="600px" pt={4}>
            <HStack spacing={8} justify="center" mb={6}>
              {[
                { icon: FaCode, label: "Developer", delay: 0.6 },
                { icon: FaGamepad, label: "Gamer", delay: 0.7 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                >
                  <VStack
                    spacing={3}
                    p={4}
                    borderRadius="xl"
                    bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
                    _hover={{
                      transform: "translateY(-5px)",
                      bg: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
                      transition: "all 0.3s ease"
                    }}
                    width="150px"
                    height="120px"
                    justifyContent="center"
                  >
                    <Icon as={item.icon} w={10} h={10} color="purple.400" />
                    <Text fontSize="md" fontWeight="medium" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}>
                      {item.label}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </HStack>

            <Box
              height="1px"
              width="80%"
              mx="auto"
              mb={6}
              bgGradient="linear(to-r, transparent, purple.400, transparent)"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Heading
                as="h3"
                fontSize="xl"
                mb={4}
                bgGradient="linear(to-r, purple.400, pink.400)"
                bgClip="text"
                fontWeight="bold"
              >
                Follow My Content On
              </Heading>
            </motion.div>

            <HStack spacing={8} justify="center">
              {[
                { 
                  icon: FaYoutube, 
                  label: "YouTube", 
                  delay: 0.8,
                  link: "https://www.youtube.com/@original_oppai",
                  hoverColor: "red.400"
                },
                { 
                  icon: FaTwitch, 
                  label: "Twitch", 
                  delay: 0.9,
                  link: "https://www.twitch.tv/oppaitheoriginal",
                  hoverColor: "purple.500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                >
                  <VStack
                    as="a"
                    href={item.link}
                    target="_blank"
                    spacing={3}
                    p={4}
                    borderRadius="xl"
                    bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
                    _hover={{
                      transform: "translateY(-5px) scale(1.05)",
                      bg: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
                      transition: "all 0.3s ease",
                      '& svg': { color: item.hoverColor }
                    }}
                    width="150px"
                    height="120px"
                    justifyContent="center"
                  >
                    <Icon as={item.icon} w={10} h={10} color="purple.400" transition="color 0.3s ease" />
                    <Text 
                      fontSize="md" 
                      fontWeight="medium" 
                      color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}
                    >
                      {item.label}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;