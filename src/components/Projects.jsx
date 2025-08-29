import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Tag, HStack, useColorMode, Badge, Icon, Image } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import uabLogo from '../assets/uab.png';
import recsiteLogo from '../assets/recsite.png';

const Projects = () => {
  const { colorMode } = useColorMode();
  const { projects } = projectsData;

  // Company logo mapping
  const companyLogos = {
    'uab Bank Myanmar': uabLogo,
    'Recsite Design': recsiteLogo
  };

  const getCompanyLogo = (companyName) => {
    return companyLogos[companyName] || null;
  };

  return (
    <Box
      id="projects"
      as="section"
      py={24}
      bg={colorMode === 'dark' ?
        "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1b69 50%, #1a1a1a 75%, #0a0a0a 100%)" :
        "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #c7d2fe 50%, #e2e8f0 75%, #f8fafc 100%)"
      }
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'rgba(120, 40, 202, 0.1)' : 'rgba(120, 40, 202, 0.05)'}
        filter="blur(60px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'rgba(255, 0, 128, 0.1)' : 'rgba(255, 0, 128, 0.05)'}
        filter="blur(80px)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={6} mb={16}>
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              bgGradient="linear(to-r, #7928CA, #FF0080, #7928CA)"
              bgClip="text"
              fontWeight="extrabold"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Professional Projects
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
              textAlign="center"
              maxW="600px"
              fontWeight="medium"
            >
              Showcasing my expertise in full-stack development and innovative solutions
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.8, type: "spring" }}
              whileHover={{ y: -10 }}
            >
              <Box
                p={8}
                borderRadius="3xl"
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
                boxShadow={colorMode === 'dark' ? 
                  '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' : 
                  '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)'
                }
                _hover={{
                  transform: 'translateY(-10px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: colorMode === 'dark' ? 
                    '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(120, 40, 202, 0.3)' : 
                    '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(120, 40, 202, 0.2)'
                }}
                position="relative"
                overflow="hidden"
                minHeight="600px"
              >
                {/* Project type badge */}
                <Box 
                  position="absolute" 
                  top={{ base: 2, md: 4 }} 
                  right={{ base: 2, md: 4 }}
                  zIndex={2}
                >
                  <Badge
                    colorScheme="purple"
                    variant="solid"
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 1 }}
                    borderRadius="full"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                  >
                    {project.role}
                  </Badge>
                </Box>

                {/* Company name with icon/logo */}
                <HStack spacing={3} mb={4} mt={{ base: 8, md: 0 }}>
                  {getCompanyLogo(project.company) ? (
                    <Image
                      src={getCompanyLogo(project.company)}
                      alt={`${project.company} logo`}
                      w={8}
                      h={8}
                      objectFit="contain"
                      borderRadius="md"
                    />
                  ) : (
                    <Icon as={FaRocket} color="purple.400" w={5} h={5} />
                  )}
                  <Text 
                    color={colorMode === 'dark' ? 'purple.300' : 'purple.600'} 
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    {project.company}
                  </Text>
                </HStack>

                {/* Project title */}
                <Heading 
                  size="lg" 
                  color={colorMode === 'dark' ? 'white' : 'gray.800'}
                  mb={4}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="extrabold"
                >
                  {project.title}
                </Heading>

                {/* Project description */}
                <Text 
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
                  mb={6}
                  fontSize="lg"
                  lineHeight="tall"
                >
                  {project.description}
                </Text>
                
                {/* Technologies section */}
                <Box mb={6}>
                  <HStack spacing={2} mb={3}>
                    <Icon as={FaCode} color="purple.400" w={4} h={4} />
                    <Text 
                      color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} 
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Technologies
                    </Text>
                  </HStack>
                  <HStack spacing={2} flexWrap="wrap">
                    {project.technologies.map((tech, i) => (
                      <Tag
                        key={i}
                        size="md"
                        variant="subtle"
                        colorScheme="purple"
                        mb={2}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="medium"
                        bg={colorMode === 'dark' ? 'rgba(120, 40, 202, 0.2)' : 'rgba(120, 40, 202, 0.1)'}
                        color={colorMode === 'dark' ? 'purple.200' : 'purple.700'}
                        border="1px solid"
                        borderColor={colorMode === 'dark' ? 'rgba(120, 40, 202, 0.3)' : 'rgba(120, 40, 202, 0.2)'}
                      >
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </Box>

                {/* Key highlights */}
                <Box>
                  <HStack spacing={2} mb={3}>
                    <Icon as={FaExternalLinkAlt} color="purple.400" w={4} h={4} />
                    <Text 
                      color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} 
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Key Highlights
                    </Text>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {project.highlights.map((highlight, i) => (
                      <HStack key={i} spacing={2} align="start">
                        <Box
                          w={2}
                          h={2}
                          borderRadius="full"
                          bgGradient="linear(to-r, #7928CA, #FF0080)"
                          mt={2}
                          flexShrink={0}
                        />
                        <Text 
                          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} 
                          fontSize="sm"
                          lineHeight="tall"
                        >
                          {highlight}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                {/* Hover effect overlay */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-br, rgba(120, 40, 202, 0.1), rgba(255, 0, 128, 0.1))"
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                  pointerEvents="none"
                  borderRadius="3xl"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* Call to action section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <VStack spacing={6} mt={20} textAlign="center">
            <Heading
              size="lg"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="bold"
            >
              Ready to Build Something Amazing?
            </Heading>
            <Text
              fontSize="lg"
              color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
              maxW="500px"
            >
              Let's collaborate on your next project and bring your ideas to life with cutting-edge technology.
            </Text>
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;