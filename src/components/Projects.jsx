// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Tag,
  HStack,
  useColorMode,
  Badge,
  Icon,
  Flex,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
// Import the custom hook
import { useProjects } from "../hooks/useProjects";

const Projects = () => {
  const { colorMode } = useColorMode();
  // Use the hook instead of importing JSON directly
  const { projects, loading, error } = useProjects();

  // Handle Error State
  if (error) {
    return (
      <Box py={24} textAlign="center">
        <Text color="red.500">Failed to load projects: {error}</Text>
      </Box>
    );
  }

  return (
    <Box
      id="projects"
      as="section"
      py={24}
      bg={colorMode === "dark" ? "transparent" : "#f8fafc"}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={6} mb={20}>
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              fontWeight="900"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            >
              Professional Projects
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={colorMode === "dark" ? "gray.400" : "gray.600"}
              textAlign="center"
              maxW="600px"
              fontWeight="medium"
            >
              Showcasing my expertise in full-stack development
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* LOADING STATE: Show Skeletons while fetching */}
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <Box
                    key={i}
                    p={8}
                    borderRadius="3xl"
                    borderWidth="1px"
                    h="500px"
                  >
                    <Skeleton height="40px" width="150px" mb={6} />
                    <Skeleton height="30px" mb={4} />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                  </Box>
                ))
            : /* DATA STATE: Show actual projects */
              projects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Box
                    className="glass-card"
                    p={8}
                    borderRadius="3xl"
                    position="relative"
                    overflow="hidden"
                    minHeight="500px"
                    display="flex"
                    flexDirection="column"
                    bg={colorMode === "dark" ? "whiteAlpha.50" : "white"}
                    border="1px solid"
                    borderColor={
                      colorMode === "dark" ? "whiteAlpha.100" : "gray.100"
                    }
                  >
                    {/* Decoration blob */}
                    <Box
                      position="absolute"
                      top="-20%"
                      right="-20%"
                      w="300px"
                      h="300px"
                      bgGradient="radial(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)"
                      filter="blur(40px)"
                      zIndex={0}
                    />

                    <Flex
                      justify="space-between"
                      align="start"
                      mb={6}
                      position="relative"
                      zIndex={1}
                    >
                      <HStack spacing={3}>
                        <Box
                          p={2}
                          bg="rgba(121, 40, 202, 0.1)"
                          borderRadius="lg"
                        >
                          {/* Ensure you have a fallback if logo is null */}
                          <Image
                            src={
                              project.logo
                                ? `${import.meta.env.BASE_URL}assets/${project.logo}`
                                : "/default-logo.png"
                            }
                            alt="Company Logo"
                            width="30px"
                            objectFit="cover"
                          />
                        </Box>
                        <Text
                          color={
                            colorMode === "dark" ? "purple.200" : "purple.800"
                          }
                          fontSize="sm"
                          fontWeight="bold"
                          textTransform="uppercase"
                          letterSpacing="wider"
                        >
                          {project.company}
                        </Text>
                      </HStack>
                      <Badge
                        variant="subtle"
                        colorScheme="pink"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {project.role}
                      </Badge>
                    </Flex>

                    <Heading
                      size="lg"
                      color={colorMode === "dark" ? "white" : "gray.800"}
                      mb={4}
                      fontWeight="800"
                      position="relative"
                      zIndex={1}
                    >
                      {project.title}
                    </Heading>

                    <Text
                      color={colorMode === "dark" ? "gray.300" : "gray.600"}
                      mb={8}
                      fontSize="md"
                      lineHeight="relaxed"
                      position="relative"
                      zIndex={1}
                      flex={1}
                    >
                      {project.description}
                    </Text>

                    <Box mb={8} position="relative" zIndex={1}>
                      <HStack spacing={2} flexWrap="wrap">
                        {/* Safety check: ensure technologies exists before mapping */}
                        {project.technologies?.map((tech, i) => (
                          <Tag
                            key={i}
                            size="md"
                            variant="outline"
                            colorScheme="purple"
                            mb={2}
                            borderRadius="full"
                            boxShadow="inset 0 0 0 1px rgba(121, 40, 202, 0.3)"
                            bg="rgba(121, 40, 202, 0.05)"
                          >
                            {tech}
                          </Tag>
                        ))}
                      </HStack>
                    </Box>

                    {/* Highlights */}
                    <Box
                      bg={
                        colorMode === "dark"
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(255,255,255,0.5)"
                      }
                      p={4}
                      borderRadius="xl"
                      position="relative"
                      zIndex={1}
                    >
                      <VStack align="start" spacing={2}>
                        {/* Safety check: ensure highlights exists */}
                        {project.highlights?.slice(0, 3).map((highlight, i) => (
                          <HStack key={i} align="start" spacing={3}>
                            <Icon
                              as={FaCode}
                              color="pink.400"
                              w={3}
                              h={3}
                              mt={1}
                            />
                            <Text fontSize="sm" color="gray.500">
                              {highlight}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                </motion.div>
              ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
