import { motion } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorMode,
  Flex,
  Badge,
  Circle,
} from "@chakra-ui/react";
import { FaBriefcase, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import experienceData from "../data/experience.json";

const Experience = () => {
  const { colorMode } = useColorMode();
  const { experience } = experienceData;

  const cardBg = colorMode === "dark" ? "rgba(255, 255, 255, 0.05)" : "white";
  const cardBorder =
    colorMode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";

  return (
    <Box
      id="experience"
      as="section"
      py={24}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack spacing={4} mb={16} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              color="white"
              fontWeight="bold"
              mb={4}
            >
              Overview
            </Badge>
            <Heading
              as="h2"
              size="2xl"
              fontWeight="900"
              mb={4}
              className="text-gradient-primary"
              lineHeight="1.2"
              pb={4}
            >
              My Journey
            </Heading>
            <Text
              fontSize="xl"
              color={colorMode === "dark" ? "gray.400" : "gray.600"}
              maxW="600px"
            >
              Software Developer with over 4 years of backend expertise in .NET
              and C#, now applying architectural rigor to full-stack development
              with React.js and Node.js. Experienced in building complex
              financial systems, optimizing database performance, and designing
              scalable APIs for modern web applications.
            </Text>
          </motion.div>
        </VStack>

        {/* Timeline */}
        <Box position="relative">
          {/* Vertical Line */}
          <Box
            position="absolute"
            left={{ base: "20px", md: "50%" }}
            top="0"
            bottom="0"
            w="2px"
            bgGradient="linear(to-b, #7928CA, #FF0080)"
            transform={{ base: "none", md: "translateX(-50%)" }}
            zIndex={0}
          />

          <VStack spacing={12} align="stretch">
            {experience.map((job, index) => (
              <Flex
                key={job.id}
                direction={{
                  base: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                }}
                align="center"
                justify="space-between"
                position="relative"
              >
                {/* Timeline Dot */}
                <Circle
                  size="40px"
                  bg={colorMode === "dark" ? "#1a1a1a" : "white"}
                  border="4px solid"
                  borderColor={job.color}
                  position="absolute"
                  left={{ base: "0", md: "50%" }}
                  transform={{ base: "none", md: "translateX(-50%)" }}
                  zIndex={1}
                >
                  <Icon as={FaBriefcase} w={3} h={3} color={job.color} />
                </Circle>

                {/* Content Card */}
                <Box
                  w={{ base: "calc(100% - 60px)", md: "45%" }}
                  ml={{ base: "60px", md: "0" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Box
                      p={8}
                      borderRadius="2xl"
                      bg={cardBg}
                      border="1px solid"
                      borderColor={cardBorder}
                      boxShadow="xl"
                      className="glass-card"
                      position="relative"
                      _hover={{
                        transform: "translateY(-5px)",
                        borderColor: job.color,
                        boxShadow: `0 10px 30px -10px ${job.color}40`,
                      }}
                      transition="all 0.3s ease"
                    >
                      <HStack justify="space-between" mb={4}>
                        <Badge
                          colorScheme="purple"
                          variant="subtle"
                          borderRadius="full"
                          px={3}
                          bg={`${job.color}20`}
                          color={job.color}
                        >
                          {job.period}
                        </Badge>
                        <Icon as={FaLaptopCode} color={job.color} />
                      </HStack>

                      <Heading
                        size="md"
                        mb={1}
                        color={colorMode === "dark" ? "white" : "gray.800"}
                      >
                        {job.role}
                      </Heading>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={job.color}
                        mb={4}
                      >
                        {job.company}
                      </Text>

                      <Text
                        color={colorMode === "dark" ? "gray.400" : "gray.600"}
                        mb={6}
                        fontSize="sm"
                        lineHeight="relaxed"
                      >
                        {job.description}
                      </Text>

                      <HStack spacing={2} flexWrap="wrap">
                        {job.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            colorScheme="gray"
                            borderRadius="lg"
                            fontSize="xs"
                            px={2}
                            py={1}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  </motion.div>
                </Box>

                {/* Empty Box for spacing on desktop */}
                <Box
                  w={{ base: "0", md: "45%" }}
                  display={{ base: "none", md: "block" }}
                />
              </Flex>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
