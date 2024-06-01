import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            CopyMaster
          </Heading>
          <Text fontSize="xl">Mastering the Art of Persuasive Copywriting</Text>
        </Box>

        {/* Introduction Section */}
        <Box textAlign="center" py={10}>
          <Image src="https://images.unsplash.com/photo-1558009250-d3d2229fdf28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3B5d3JpdGluZ3xlbnwwfHx8fDE3MTcyNDEzODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Copywriting" borderRadius="md" mb={4} />
          <Text fontSize="lg">At CopyMaster, we specialize in crafting compelling copy that converts. Whether you need landing pages that capture leads or email copies that drive engagement, we've got you covered.</Text>
        </Box>

        {/* Services Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Our Services
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <FaRocket size="3em" />
              <Heading as="h3" size="md">
                Landing Page Copywriting
              </Heading>
              <Text textAlign="center">We create high-converting landing pages that turn visitors into customers.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <FaEnvelope size="3em" />
              <Heading as="h3" size="md">
                Email Copywriting
              </Heading>
              <Text textAlign="center">Our email copies are designed to engage and convert your audience.</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box py={10} textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Get in Touch
          </Heading>
          <Text fontSize="lg" mb={4}>
            Ready to elevate your copy? Contact us today!
          </Text>
          <HStack spacing={4} justify="center">
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              Email Us
            </Button>
            <IconButton aria-label="Call Us" icon={<FaPhone />} size="lg" colorScheme="teal" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
