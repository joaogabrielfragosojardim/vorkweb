import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const Intro = () => (
  <Flex maxW="1446px" m="auto" p="96px 0px" justify="space-between">
    <Box fontSize="68px" lineHeight="82px">
      <Flex gap="16px">
        <Text>Webdesign</Text>
        <Text
          color="black"
          textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
        >
          &
        </Text>
      </Flex>
      <Text>Gestão de Mídias</Text>
      <Button bg="white" color="black" borderRadius="0px" mt="32px">
        Entre em contato
      </Button>
    </Box>
    <Box w="362px" h="495px">
      <Image src="/intro.png" alt="a notebook with a coffe mug and an iphone" />
    </Box>
  </Flex>
);
