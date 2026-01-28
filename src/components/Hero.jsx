import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorMode,
  Image,
  Flex,
  Stack,
  Tooltip,
  Badge,
} from "@chakra-ui/react";
import {
  FaTwitch,
  FaYoutube,
  FaCode,
  FaGamepad,
  FaArrowDown,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profileImage from "../assets/profile_transparent.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const { colorMode } = useColorMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const bgGradient =
    colorMode === "dark"
      ? "linear-gradient(to bottom, #050505, #1a1a2e)"
      : "linear-gradient(to bottom, #f0f2f5, #e0e7ff)";

  return (
    <Box
      id="hero"
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgGradient}
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 0 }}
    >
      {/* Dynamic Grid Background */}
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        right="-50%"
        bottom="-50%"
        style={{
          backgroundImage: `linear-gradient(${colorMode === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px),
            linear-gradient(90deg, ${colorMode === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

      {/* Ambient Glows */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxW="container.xl" px={4} position="relative" zIndex={10}>
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: 12, lg: 8 }}
          align="center"
          justify="space-between"
          minH={{ lg: "80vh" }}
        >
          {/* Left Column: Text Content */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={6}
            flex={1}
            textAlign={{ base: "center", lg: "left" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                bg={colorMode === "dark" ? "rgba(255,255,255,0.1)" : "white"}
                color="#FF0080"
                fontWeight="bold"
                mb={4}
                border="1px solid"
                borderColor="rgba(255,0,128,0.3)"
              >
                👋 Welcome to my universe
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="900"
                lineHeight="1.1"
                pb={4}
                className="text-gradient-primary"
                letterSpacing="-0.02em"
              >
                Aung Zaw Myo
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight="300"
                color={colorMode === "dark" ? "gray.300" : "gray.600"}
              >
                aka{" "}
                <Text as="span" fontWeight="bold" color="#FF0080">
                  Oppai The Original
                </Text>
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Text
                fontSize="lg"
                maxW="500px"
                color={colorMode === "dark" ? "gray.400" : "gray.600"}
                lineHeight="1.8"
              >
                A passionate{" "}
                <Text as="span" color="#7928CA" fontWeight="bold">
                  Full Stack Developer
                </Text>{" "}
                and{" "}
                <Text as="span" color="#FF0080" fontWeight="bold">
                  Content Creator
                </Text>{" "}
                crafting digital experiences that merge technical precision with
                creative entertainment.
              </Text>
            </motion.div>

            {/* Social & Identity Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <HStack
                spacing={4}
                pt={4}
                flexWrap="wrap"
                justify={{ base: "center", lg: "flex-start" }}
              >
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/aungzawmyo",
                    color: "#ffffff",
                    label: "Github",
                  },
                  {
                    icon: FaYoutube,
                    href: "https://youtube.com/@original_oppai",
                    color: "#FF0000",
                    label: "YouTube",
                  },
                  {
                    icon: FaTwitch,
                    href: "https://twitch.tv/oppaitheoriginal",
                    color: "#9146FF",
                    label: "Twitch",
                  },
                ].map((social, idx) => (
                  <Tooltip
                    key={idx}
                    label={social.label}
                    hasArrow
                    bg="gray.700"
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: "16px",
                        background:
                          colorMode === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "white",
                        borderRadius: "16px",
                        border: "1px solid",
                        borderColor:
                          colorMode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        as={social.icon}
                        w={6}
                        h={6}
                        color={colorMode === "dark" ? "gray.400" : "gray.600"}
                        _hover={{ color: social.color }}
                        transition="color 0.2s"
                      />
                    </motion.a>
                  </Tooltip>
                ))}
              </HStack>
            </motion.div>
          </VStack>

          {/* Right Column: Hero Image */}
          <Box
            flex={1}
            position="relative"
            display="flex"
            justifyContent="center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="animate-float"
            >
              <Box
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow={`0 0 80px -20px ${colorMode === "dark" ? "#7928CA" : "#FF0080"}60`}
                border="2px solid rgba(255,255,255,0.1)"
              >
                {/* Gradient Overlay */}
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-b, transparent 0%, rgba(121, 40, 202, 0.2) 100%)"
                  zIndex={1}
                />
                <Image
                  src={profileImage}
                  alt="Aung Zaw Myo"
                  w={{ base: "100%", lg: "600px" }}
                  maxH={{ base: "400px", lg: "600px" }}
                  objectFit="cover"
                  filter={
                    colorMode === "dark" ? "brightness(1.1)" : "contrast(1.1)"
                  }
                />
              </Box>
            </motion.div>

            {/* Decorative Elements around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                zIndex: -1,
              }}
            >
              <Icon as={FaCode} w={12} h={12} color="#7928CA" opacity="0.3" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: "40px",
                left: "-30px",
                zIndex: 2,
              }}
            >
              <Icon
                as={FaGamepad}
                w={10}
                h={10}
                color="#FF0080"
                opacity="0.8"
                filter="drop-shadow(0 0 10px #FF0080)"
              />
            </motion.div>
          </Box>
        </Stack>

        {/* Scroll Indicator - Styled Circle */}
        <Box display={{ base: "none", md: "block" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              position: "absolute",
              bottom: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 30,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 0, 128, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backgroundColor:
                  colorMode === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Icon
                as={FaArrowDown}
                w={5}
                h={5}
                color={colorMode === "dark" ? "white" : "gray.800"}
              />
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

// Start of helper component Badge
// Since Badge is imported from Chakra, we don't need to define it.
// However, the standard Chakra Badge is text, so I used the component directly above.

export default Hero;
