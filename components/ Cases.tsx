import {
  Box,
  Flex,
  Image,
  Link,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { cases } from "../constants/cases";
import { lessThenTen } from "../utils/lessThenTen";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";
import { Slide } from "react-slideshow-image";

export const Cases = () => {
  return (
    <Box maxW="1446px" m="auto" p="96px 0px">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <SlideFade
            in={inView}
            transition={{ enter: { duration: animations } }}
          >
            <Text ref={ref} fontSize="68px" mt="5rem" id="projects">
              Projetos
            </Text>
          </SlideFade>
        )}
      </InView>
      <Slide slidesToScroll={1} slidesToShow={2} arrows={true}>
        {cases.map((uCase, index) => {
          const newIndex = lessThenTen(index + 1);

          return (
            <Box key={uCase.link} mt="64px">
              <Text fontSize="18px" mb="16px">
                {newIndex}
              </Text>
              <Link
                href={uCase.link}
                target="_blank"
                _hover={{ textDecor: "none" }}
              >
                <Flex bg={uCase.bg} h="20rem" justify="center" align="center">
                  <Image
                    boxSize="8rem"
                    objectFit="contain"
                    src={uCase.src}
                    alt="uCase logo"
                    borderRadius={uCase.rounded ? "100%" : "unset"}
                  />
                </Flex>
                <Text fontSize="18px" fontWeight="bold" mt="2rem">
                  {uCase.title}
                </Text>
                <Text fontSize="18px" mt="0.5rem" maxW="620px">
                  {uCase.about}
                </Text>
              </Link>
            </Box>
          );
        })}
      </Slide>
    </Box>
  );
};
