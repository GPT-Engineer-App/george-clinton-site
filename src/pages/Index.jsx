import { Box, Container, Heading, Text, VStack, Image, Link, IconButton, HStack, Divider, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import NavComponent from "../components/NavComponent";
import { FaTwitter, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} as="header" textAlign="center">
        <NavComponent />
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1518105570919-e342af1a8275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBDbGludG9ufGVufDB8fHx8MTcxMDMyNjc4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="George Clinton" />
        <Heading as="h1" size="xl">
          George Clinton
        </Heading>
        <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
          Composer, Musician, and Innovator
        </Text>
      </VStack>

      <Box as="section" py={10}>
        <Heading as="h2" size="lg" mb={4}>
          About Me
        </Heading>
        <Text fontSize="md">I am George Clinton, an influential figure in the music industry known for my innovation in the funk genre. With a career spanning over five decades, I have been the mastermind behind the bands Parliament and Funkadelic. I continue to inspire and mentor new artists while staying active in both recording and touring.</Text>
      </Box>

      <Divider my={10} />

      <Box as="section" py={10}>
        <Heading as="h2" size="lg" mb={4}>
          Connect With Me
        </Heading>
        <HStack spacing={4} justifyContent="center">
          <Link href="https://twitter.com/george_clinton" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
          </Link>
          <Link href="https://www.linkedin.com/in/george-clinton" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="linkedin" />
          </Link>
          <Link href="mailto:george.clinton@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="teal" />
          </Link>
        </HStack>
      </Box>

      <Box textAlign="center" py={10}>
        <Button onClick={toggleColorMode}>
          Toggle {SwitchIcon === FaMoon ? "Night" : "Day"} Mode
          <SwitchIcon ml={2} />
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
