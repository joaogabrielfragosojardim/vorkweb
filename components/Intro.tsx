import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

export const Intro = () => (
  <Flex
    maxW="1446px"
    m="auto"
    p={{base:"32px 0px", xl:"96px 0px"}}
    justify="space-between"
    flexDir={{ base: "column", xl: "row" }}
    gap={{ base: "64px", xl: "unset" }}
  >
    <Box
      fontSize={{ base: "34px", md: "68px" }}
      lineHeight={{ base: "42px", md: "82px" }}
    >
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
      <Link href="https://wa.me/5562981635159" target="_bank">
        <Button bg="white" color="black" borderRadius="0px" mt="32px">
          Entre em contato
        </Button>
      </Link>
    </Box>
    <Box w={{ base: "241px", xl: "362px" }} h={{ base: "330px", xl: "495px" }}>
      <Image src="/intro.png" alt="a notebook with a coffe mug and an iphone" />
    </Box>
  </Flex>
);
