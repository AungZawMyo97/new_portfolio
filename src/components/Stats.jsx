import { SimpleGrid, Box, Text, useColorMode, Icon, Flex, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaGitAlt } from 'react-icons/fa';

const stats = [
    { label: 'Experience', value: '4 Years', icon: FaBriefcase, color: '#7928CA' },
    { label: 'Projects', value: '25+', icon: FaCode, color: '#FF0080' },
    { label: 'Contributions', value: '100+', icon: FaGitAlt, color: '#00B5D8' },
];

const Stats = () => {
    const { colorMode } = useColorMode();
    const cardBg = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'white';
    const cardBorder = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

    return (
        <Box as="section" py={10} position="relative" zIndex={10}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Box
                                p={6}
                                borderRadius="2xl"
                                bg={cardBg}
                                border="1px solid"
                                borderColor={cardBorder}
                                boxShadow="xl"
                                className="glass-card"
                                textAlign="center"
                                position="relative"
                                overflow="hidden"
                                _hover={{
                                    borderColor: stat.color,
                                    boxShadow: `0 0 20px ${stat.color}40`
                                }}
                                transition="all 0.3s ease"
                            >
                                {/* Background Glow */}
                                <Box
                                    position="absolute"
                                    top="-50%"
                                    left="-50%"
                                    w="200%"
                                    h="200%"
                                    bg={`radial-gradient(circle, ${stat.color}10 0%, transparent 70%)`}
                                    opacity={0.5}
                                    zIndex={0}
                                />

                                <Flex direction="column" align="center" position="relative" zIndex={1}>
                                    <Icon as={stat.icon} w={8} h={8} color={stat.color} mb={3} />
                                    <Text
                                        fontSize="4xl"
                                        fontWeight="900"
                                        bgGradient={`linear(to-r, ${stat.color}, ${stat.color})`}
                                        bgClip="text"
                                        mb={1}
                                    >
                                        {stat.value}
                                    </Text>
                                    <Text fontSize="lg" fontWeight="medium" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                                        {stat.label}
                                    </Text>
                                </Flex>
                            </Box>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Stats;
