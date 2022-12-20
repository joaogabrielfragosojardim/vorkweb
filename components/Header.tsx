import { Box, Image } from "@chakra-ui/react";

export const Header = () => (
  <Box w="100%" p="16px" borderBottom="solid 1px white" mb="64px">
    <Box m="auto" w="100%" maxW="1446px">
      <Image src="vorkwebLogo.png" alt="logo" boxSize="32px" />
    </Box>
  </Box>
);
