import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorMode, Image, Button } from '@chakra-ui/react';
import { FaTwitch, FaYoutube, FaCode, FaGamepad, FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import personalLogo from '../assets/personal_logo.png';

const Hero = () => {
  const { colorMode } = useColorMode();
  
  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <Box
      id="hero"
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg={colorMode === 'dark' ? 
        "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1b69 50%, #1a1a1a 75%, #0a0a0a 100%)" :
        "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #c7d2fe 50%, #e2e8f0 75%, #f8fafc 100%)"
      }
      position="relative"
      overflow="hidden"
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
    >
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: colorMode === 'dark' ? 
              `rgba(${Math.random() * 255}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.6)` :
              `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.4)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background={colorMode === 'dark' ?
          'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)' :
          'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)'
        }
        pointerEvents="none"
      />

      <Container maxW="container.lg" px={4} py={8} textAlign="center" position="relative" zIndex={1}>
        <VStack spacing={12} align="center" textAlign="center">
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Box
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                background: 'linear-gradient(45deg, #ff0080, #7928ca, #ff0080)',
                borderRadius: 'full',
                zIndex: -1,
                animation: 'spin 3s linear infinite',
              }}
            >
              <Image
                src={personalLogo}
                alt="Personal Logo"
                width="140px"
                height="140px"
                objectFit="contain"
                borderRadius="full"
                boxShadow={colorMode === 'dark' ? 
                  '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(120, 40, 202, 0.3)' : 
                  '0 0 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(120, 40, 202, 0.2)'
                }
                filter={colorMode === 'dark' ? 'brightness(1.1)' : 'brightness(0.95)'}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: 'scale(1.1) rotate(5deg)',
                  boxShadow: colorMode === 'dark' ? 
                    '0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(120, 40, 202, 0.4)' : 
                    '0 0 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(120, 40, 202, 0.3)'
                }}
              />
            </Box>
          </motion.div>

          {/* Name and title with enhanced typography */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, #FF0080, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              mb={6}
              lineHeight={1.2}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              letterSpacing="tight"
            >
              Aung Zaw Myo
            </Heading>
            <Text 
              fontSize={{ base: "xl", md: "2xl" }} 
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
              mt={4}
              fontWeight="medium"
            >
              aka 
              <br />
              <Text 
                as="span" 
                fontWeight="bold" 
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Oppai The Original 
              </Text>
            </Text>
          </motion.div>

          {/* Description with glassmorphism */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Box
              p={8}
              borderRadius="2xl"
              bg={colorMode === 'dark' ? 
                'rgba(255, 255, 255, 0.05)' : 
                'rgba(255, 255, 255, 0.8)'
              }
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor={colorMode === 'dark' ? 
                'rgba(255, 255, 255, 0.1)' : 
                'rgba(255, 255, 255, 0.3)'
              }
              boxShadow={colorMode === 'dark' ? 
                '0 8px 32px rgba(0, 0, 0, 0.3)' : 
                '0 8px 32px rgba(0, 0, 0, 0.1)'
              }
              maxW="800px"
            >
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color={colorMode === 'dark' ? 'gray.200' : 'gray.700'} 
                mb={4}
                fontWeight="semibold"
              >
                Full Stack Developer & Gaming Content Creator
              </Text>
              <Text 
                fontSize={{ base: "md", md: "lg" }} 
                color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} 
                lineHeight="tall"
                maxW="700px"
              >
                Passionate about crafting elegant web solutions and creating engaging gaming content.
                With expertise in modern web technologies and a love for gaming,
                I bring a unique blend of technical skills and creative entertainment.
              </Text>
            </Box>
          </motion.div>

          {/* Skills showcase with enhanced cards */}
          <Box width="100%" maxW="700px" pt={4}>
            <HStack spacing={8} justify="center" mb={8}>
              {[
                { icon: FaCode, label: "Developer", delay: 0.9, color: "#7928CA" },
                { icon: FaGamepad, label: "Gamer", delay: 1.0, color: "#FF0080" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
                >
                  <VStack
                    spacing={4}
                    p={6}
                    borderRadius="2xl"
                    bg={colorMode === 'dark' ? 
                      'rgba(255, 255, 255, 0.08)' : 
                      'rgba(255, 255, 255, 0.9)'
                    }
                    backdropFilter="blur(20px)"
                    border="1px solid"
                    borderColor={colorMode === 'dark' ? 
                      'rgba(255, 255, 255, 0.15)' : 
                      'rgba(255, 255, 255, 0.4)'
                    }
                    _hover={{
                      transform: "translateY(-8px) scale(1.05)",
                      bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 1)',
                      boxShadow: `0 20px 40px rgba(${item.color === "#7928CA" ? "120, 40, 202" : "255, 0, 128"}, 0.3)`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    width="160px"
                    height="140px"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <Icon 
                      as={item.icon} 
                      w={12} 
                      h={12} 
                      color={item.color}
                      transition="all 0.3s ease"
                    />
                    <Text 
                      fontSize="lg" 
                      fontWeight="bold" 
                      color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
                    >
                      {item.label}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </HStack>

            {/* Decorative divider */}
            <Box
              height="2px"
              width="60%"
              mx="auto"
              mb={8}
              bgGradient="linear(to-r, transparent, #7928CA, #FF0080, #7928CA, transparent)"
              borderRadius="full"
            />

            {/* Social media section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Heading
                as="h3"
                fontSize={{ base: "lg", md: "xl" }}
                mb={6}
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="bold"
              >
                Follow My Content On
              </Heading>
            </motion.div>

            <HStack spacing={8} justify="center" mb={8}>
              {[
                { 
                  icon: FaYoutube, 
                  label: "YouTube", 
                  delay: 1.3,
                  link: "https://www.youtube.com/@original_oppai",
                  hoverColor: "#FF0000",
                  bgColor: "rgba(255, 0, 0, 0.1)"
                },
                { 
                  icon: FaTwitch, 
                  label: "Twitch", 
                  delay: 1.4,
                  link: "https://www.twitch.tv/oppaitheoriginal",
                  hoverColor: "#9146FF",
                  bgColor: "rgba(145, 70, 255, 0.1)"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
                >
                  <VStack
                    as="a"
                    href={item.link}
                    target="_blank"
                    spacing={4}
                    p={6}
                    borderRadius="2xl"
                    bg={colorMode === 'dark' ? 
                      'rgba(255, 255, 255, 0.08)' : 
                      'rgba(255, 255, 255, 0.9)'
                    }
                    backdropFilter="blur(20px)"
                    border="1px solid"
                    borderColor={colorMode === 'dark' ? 
                      'rgba(255, 255, 255, 0.15)' : 
                      'rgba(255, 255, 255, 0.4)'
                    }
                    _hover={{
                      transform: "translateY(-8px) scale(1.05)",
                      bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 1)',
                      boxShadow: `0 20px 40px rgba(${item.hoverColor === "#FF0000" ? "255, 0, 0" : "145, 70, 255"}, 0.4)`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    width="160px"
                    height="140px"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <Icon 
                      as={item.icon} 
                      w={12} 
                      h={12} 
                      color={item.hoverColor}
                      transition="all 0.3s ease"
                    />
                    <Text 
                      fontSize="lg" 
                      fontWeight="bold" 
                      color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
                    >
                      {item.label}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </HStack>

            {/* Call to action button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, #FF0080, #7928CA)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(120, 40, 202, 0.4)"
                }}
                _active={{
                  transform: "translateY(0)"
                }}
                px={8}
                py={6}
                borderRadius="xl"
                fontWeight="bold"
                fontSize="lg"
                transition="all 0.3s ease"
                rightIcon={<FaArrowDown />}
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore My Work
              </Button>
            </motion.div>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;