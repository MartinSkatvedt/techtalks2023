import { Box, Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="40%" mx="auto" mb={18}>
      <Image src="/logo.svg" alt="Tech Talks logo" />
    </Flex>
  );
};

export default Header;
