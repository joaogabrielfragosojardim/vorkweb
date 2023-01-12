import { Flex, Text } from "@chakra-ui/react";

export const Unique = () => (
  <Flex
    maxW="1446px"
    m="auto"
    p={{ base: "20px 0px", xl: "96px 0px" }}
    justify="center"
    align="center"
    minH={{ base: "30vh", xl: "60vh" }}
  >
    <Text
      color="black"
      textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
      fontSize={{ base: "34px", md: "68px" }}
    >
      Vamos fazer algo unico.
    </Text>
  </Flex>
);
