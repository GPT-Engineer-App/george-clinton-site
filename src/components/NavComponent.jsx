import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <Flex as="nav" mb={8} align="center" justify="center">
      <Box p="2">
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
      </Box>
      <Spacer />
      {}
    </Flex>
  );
};

export default NavComponent;
