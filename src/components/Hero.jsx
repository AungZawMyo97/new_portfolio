import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorMode } from '@chakra-ui/react';
import { FaTwitch, FaYoutube, FaCode, FaGamepad } from 'react-icons/fa';

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
      <Container maxW="100vw" px={4}>
        <VStack spacing={8} align="center" textAlign="center">
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
            >
              Aung Zaw Myo
            </Heading>
            <Text fontSize="2xl" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mt={2}>
              aka Oppai
            </Text>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Text fontSize="xl" maxW="600px" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} mb={4}>
              Full Stack Developer & Gaming Content Creator
            </Text>
            <Text fontSize="md" maxW="700px" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} lineHeight="tall">
              Passionate about crafting elegant web solutions and creating engaging gaming content.
              With expertise in modern web technologies and a love for gaming,
              I bring a unique blend of technical skills and creative entertainment.
            </Text>
          </motion.div>

          <HStack spacing={6} pt={4}>
            {[
              { icon: FaCode, label: "Developer", delay: 0.6 },
              { icon: FaGamepad, label: "Gamer", delay: 0.7 },
              { 
                icon: FaYoutube, 
                label: "YouTube", 
                delay: 0.8,
                link: "https://www.youtube.com/@original_oppai"
              },
              { 
                icon: FaTwitch, 
                label: "Twitch", 
                delay: 0.9,
                link: "https://www.twitch.tv/oppaitheoriginal"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item.delay, duration: 0.5 }}
              >
                <VStack
                  as={item.link ? "a" : "div"}
                  href={item.link}
                  target={item.link ? "_blank" : undefined}
                  spacing={2}
                  cursor={item.link ? "pointer" : "default"}
                  _hover={{
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <Icon as={item.icon} w={8} h={8} color="purple.400" />
                  <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                    {item.label}
                  </Text>
                </VStack>
              </motion.div>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;