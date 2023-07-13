import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => (
  <Flex
    maxW="1446px"
    m="auto"
    flexDir="column"
    align="center"
    justify="center"
    p="40px 40px"
  >
    <Box w="303px" h="63px">
      <Image src="/logofull.png" alt="vorkweb logo" />
    </Box>
    <Flex fontSize="22px" gap="32px" mt="32px">
      <Link href="https://instagram.com/vorkweb" target="_blank">
        <BsInstagram />
      </Link>
      <Link href="https://wa.me/5547992798665" target="_blank">
        <BsWhatsapp />
      </Link>
    </Flex>
  </Flex>
);
