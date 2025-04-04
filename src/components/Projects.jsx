import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Tag, HStack, useColorMode } from '@chakra-ui/react';

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Balance Confirmation (uabpay app)',
      company: 'uab Bank Myanmar',
      description: 'Developed back-end APIs for uabpay Digital Wallet to generate bank balance confirmation statements with secure email delivery.',
      role: 'Backend Developer',
      technologies: ['ASP.NET Core', '.NET Framework', 'RESTFUL API', 'XML', 'Core Banking Integration'],
      highlights: [
        'Developed back-end APIs for direct download and E-mail sending features',
        'Added encrypted request/response body schema for security',
        'Implemented session control to prevent fraud and illegal access',
        'Integrated with Core Banking system for account information retrieval',
        'Developed SOAP API with XML format for Core Banking communication',
        'Implemented secure email delivery using Mailgun APIs'
      ]
    },
    {
      title: 'SGH+ App',
      company: 'uab Bank Myanmar',
      description: 'A white label wallet application developed in collaboration with Sein Gay Har shopping mart for seamless payments and transactions.',
      role: 'Backend Developer',
      technologies: ['ASP.NET Core', '.NET Framework', 'API Development', 'Payment Integration', 'Transaction Systems'],
      highlights: [
        'Developed core back-end APIs for user registration and authentication',
        'Implemented payment system APIs for various transaction scenarios',
        'Optimized transaction flows to align with existing voucher systems',
        'Deployed and maintained system in UAT environment with ongoing support'
      ]
    },
    {
      title: 'Admin Portal for MAI Xtra',
      company: 'uab Bank Myanmar',
      description: 'Developed a comprehensive MVC web application for managing daily transactions and user registrations in the MAI Xtra system.',
      role: 'Full Stack Developer',
      technologies: ['ASP.NET Core MVC', 'ASP.NET', '.NET Framework', 'C#', 'Entity Framework Core', 'SQL Server'],
      highlights: [
        'Designed and implemented intuitive admin interface for transaction monitoring',
        'Created efficient database schema ensuring scalability and maintainability',
        'Implemented clean MVC architecture with modular design patterns',
        'Developed CRUD operations for entity management',
        'Integrated role-based access control for secure feature access'
      ]
    },
    {
      title: 'Aung Bar Lay Lottery Payment API',
      company: 'uab Bank Myanmar',
      description: 'Developed and maintained third-party payment API integration for government lottery purchases through uabpay.',
      role: 'API Integration Specialist',
      technologies: ['ASP.NET Core', '.NET Framework', 'RESTful APIs', 'Payment Integration', 'Security Protocols', 'SHA256'],
      highlights: [
        'Integrated third-party payment API for secure lottery purchases',
        'Implemented mobile app endpoints for payment processing',
        'Ensured compliance with security standards for sensitive data',
        'Implemented secure hash calculations using SHA256',
        'Created comprehensive API documentation and guidelines'
      ]
    },
    {
      title: 'uabpay Merchant Portal',
      company: 'uab Bank Myanmar',
      description: 'Led the development of a comprehensive merchant portal web application for digital wallet payment services.',
      role: 'Lead Developer',
      technologies: ['ASP.NET Core MVC', 'ASP.NET', '.NET Framework', 'Web Development', 'Payment Systems', 'User Management', 'Security'],
      highlights: [
        'Developed core features including transaction monitoring and fund transfers',
        'Implemented secure authentication and authorization systems',
        'Created APIs for transaction processing and balance checking',
        'Developed automated payroll system for merchant employees',
        'Implemented user management with role-based access control'
      ]
    },
    {
      title: 'uabpay WinGold Campaign APIs',
      company: 'uab Bank Myanmar',
      description: 'Led the development of campaign APIs to drive user engagement and growth within the wallet system platform.',
      role: 'Lead API Developer',
      technologies: ['ASP.NET Core', '.NET Framework', 'RESTful APIs', 'User Engagement', 'Points System', 'Campaign Management'],
      highlights: [
        'Designed APIs for campaign functionality and point calculations',
        'Implemented secure authentication for campaign data access',
        'Developed algorithms for friend invitation point system',
        'Created APIs for leaderboard and winner display',
        'Successfully increased user registrations through campaign implementation'
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