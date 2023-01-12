import { Flex, Text } from "@chakra-ui/react";

export const Words = () => (
  <Flex
    maxW="1446px"
    m="auto"
    p={{ base: "20px 0px", xl: "96px 0px" }}
    justify="center"
    align="center"
    textAlign="center"
    flexDir="column"
    fontSize={{ base: "32px", md: "48px" }}
    gap="32px"
    minH={{ base: "30vh", xl: "60vh" }}
  >
    <Text _hover={{ textDecor: "underline" }}>Criativo</Text>
    <Text _hover={{ textDecor: "underline" }}>Elegante</Text>
    <Text _hover={{ textDecor: "underline" }}>Exclusivo</Text>
  </Flex>
);
