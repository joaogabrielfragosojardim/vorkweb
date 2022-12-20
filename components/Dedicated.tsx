import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const Dedicated = () => (
  <Flex maxW="1446px" m="auto" p="96px 0px" justify="space-between">
    <Box w="362px" h="495px">
      <Image src="/dedicated.png" alt="a notebook with a coffe mug and an iphone" />
    </Box>
    <Box maxW="532px">
      <Text fontSize="68px" lineHeight="82px">
        Dedicados a sua marca
      </Text>
      <Text fontSize="18px" mt="16px">
        Verificamos cada detalhe, cada visão e emoção que suamarca gostaria de
        emitir ao seu cliente e a transformamos em site de extrema rapidez e
        qualidade.
      </Text>
      <Button bg="white" color="black" borderRadius="0px" mt="32px">
        Entre em contato
      </Button>
    </Box>
  </Flex>
);
