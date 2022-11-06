import { Box } from "@chakra-ui/react";
import Header from "../../header/components";
import Navbar from "../../navbar/components";

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = (props: PageContainerProps) => {
  const { children } = props;
  return (
    <Box
      w="90%"
      mx="auto"
      backgroundColor="#181b1e"
      minHeight="90vh"
      color="white"
    >
      <Header />
      <Navbar />
      {children}
    </Box>
  );
};

export default PageContainer;
