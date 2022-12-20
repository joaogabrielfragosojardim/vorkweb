import { Flex, Text } from "@chakra-ui/react";

export const Words = () => (
  <Flex
    maxW="1446px"
    m="auto"
    p="96px 0px"
    justify="center"
    align="center"
    textAlign="center"
    flexDir="column"
    fontSize="48px"
    gap="32px"
    minH="60vh"
  >
    <Text _hover={{ textDecor: "underline" }}>Criativo</Text>
    <Text _hover={{ textDecor: "underline" }}>Elegante</Text>
    <Text _hover={{ textDecor: "underline" }}>Exclusivo</Text>
  </Flex>
);
