import { Box, Flex } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex justifyContent="space-evenly">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/program">Program</NavLink>
      <NavLink to="/about">Om Tech Talks</NavLink>
    </Flex>
  );
};

export default Navbar;
