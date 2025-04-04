import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Tag, HStack, useColorMode } from '@chakra-ui/react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const { colorMode } = useColorMode();
  const { projects } = projectsData;

  return (
    <Box
      as="section"
      py={20}
      bg={colorMode === 'dark' ?
        "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" :
        "linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)"
      }
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
    >
      <Container maxW="container.xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
          >
            Professional Projects
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <Box
                p={8}
                borderRadius="xl"
                bg={colorMode === 'dark' ? 
                  'rgba(255, 255, 255, 0.05)' : 
                  'rgba(0, 0, 0, 0.02)'
                }
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={colorMode === 'dark' ? 
                  'rgba(255, 255, 255, 0.1)' : 
                  'rgba(0, 0, 0, 0.1)'
                }
                _hover={{
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <VStack align="start" spacing={4}>
                  <Heading size="lg" color="purple.400">
                    {project.title}
                  </Heading>
                  <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} fontSize="lg">
                    {project.company}
                  </Text>
                  <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>{project.description}</Text>
                  <Text color={colorMode === 'dark' ? 'purple.300' : 'purple.600'} fontWeight="bold">
                    Role: {project.role}
                  </Text>
                  
                  <Box>
                    <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} fontWeight="bold" mb={2}>
                      Technologies:
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Tag
                          key={i}
                          size="md"
                          variant="subtle"
                          colorScheme="purple"
                          mb={2}
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>

                  <Box>
                    <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} fontWeight="bold" mb={2}>
                      Key Highlights:
                    </Text>
                    <VStack align="start" spacing={2}>
                      {project.highlights.map((highlight, i) => (
                        <Text key={i} color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} fontSize="sm">
                          • {highlight}
                        </Text>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;