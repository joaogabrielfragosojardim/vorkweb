import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

export const Dedicated = () => (
  <Flex
    maxW="1446px"
    m="auto"
    p="96px 0px"
    justify="space-between"
    flexDir={{ base: "column", xl: "row" }}
    gap={{ base: "64px", xl: "unset" }}
  >
    <Box w={{ base: "241px", xl: "362px" }} h={{ base: "330px", xl: "495px" }}>
      <Image
        src="/dedicated.png"
        alt="a notebook with a coffe mug and an iphone"
      />
    </Box>
    <Box maxW="532px">
      <Text
        fontSize={{ base: "34px", md: "68px" }}
        lineHeight={{ base: "42px", md: "82px" }}
      >
        Dedicados a sua marca
      </Text>
      <Text fontSize={{ base: "16px", md: "18px" }} mt="16px">
        Verificamos cada detalhe, cada visão e emoção que suamarca gostaria de
        emitir ao seu cliente e a transformamos em site de extrema rapidez e
        qualidade.
      </Text>
      <Link href="https://wa.me/5547992798665" target="_bank">
        <Button bg="white" color="black" borderRadius="0px" mt="32px">
          Entre em contato
        </Button>
      </Link>
    </Box>
  </Flex>
);
