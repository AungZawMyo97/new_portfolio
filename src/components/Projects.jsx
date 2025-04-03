import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Tag, HStack, useColorMode } from '@chakra-ui/react';

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'uabpay Digital Wallet',
      company: 'uab Bank Myanmar',
      description: 'Developed a comprehensive digital wallet solution enabling secure financial transactions and digital payments for uab Bank customers.',
      role: 'Backend API Developer',
      technologies: ['API Development', 'Payment Gateway Integration', 'Security Protocols'],
      highlights: [
        'Designed and implemented robust RESTful APIs for the digital wallet system',
        'Integrated multiple payment gateways for seamless transactions',
        'Developed merchant portal interfaces for business customers',
        'Implemented secure authentication and authorization systems'
      ]
    },
    {
      title: 'Merchant Portal',
      company: 'uab Bank Myanmar',
      description: 'Developed a comprehensive merchant portal system providing essential business tools and financial management capabilities for uab Bank merchants.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Node.js', 'RESTful APIs', 'Payment Integration'],
      highlights: [
        'Implemented daily transaction reporting system with detailed analytics',
        'Developed payroll management system for efficient salary disbursement',
        'Integrated secure fund transfer capabilities with real-time tracking',
        'Created merchant-specific dashboards with customizable features'
      ]
    },
    {
      title: 'Aung Bar Lay Lottery Integration',
      company: 'uab Bank Myanmar',
      description: 'Integrated a comprehensive lottery buying system with uabpay, enabling users to purchase lottery tickets digitally.',
      role: 'Integration Specialist',
      technologies: ['Payment Gateway', 'API Integration', 'Security Implementation'],
      highlights: [
        'Seamlessly integrated lottery system with uabpay payment gateway',
        'Implemented secure transaction processing for lottery purchases',
        'Developed real-time ticket verification system',
        'Created user-friendly interface for lottery selection and purchase'
      ]
    },
    {
      title: 'ATS Website',
      company: 'Recsite Design',
      description: 'Currently developing an Applicant Tracking System (ATS) website to streamline recruitment processes and enhance HR operations.',
      role: 'Full Stack Developer',
      technologies: ['React', 'ASP.NET Core', 'Modern UI/UX'],
      highlights: [
        'Building responsive and intuitive user interfaces using React',
        'Developing backend services with ASP.NET Core',
        'Implementing modern recruitment tracking features',
        'Creating efficient database schemas for applicant data management'
      ]
    }
  ];

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
            bgGradient="linear(to-r, #FF0080, #7928CA)"
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