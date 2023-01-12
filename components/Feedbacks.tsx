import { Box, Flex, Image, Link, SlideFade, Text } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";
import { Slide } from "react-slideshow-image";
import { feedbacks } from "../constants/feedbacks";

export const Feedbacks = () => {
  return (
    <Box maxW="1446px" m="auto" p="96px 0px">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <SlideFade
            in={inView}
            transition={{ enter: { duration: animations } }}
          >
            <Text
              ref={ref}
              fontSize={{ base: "34px", md: "68px" }}
              mt="5rem"
              id="projects"
            >
              Feedbacks
            </Text>
          </SlideFade>
        )}
      </InView>
      <Box w="100%" border="solid 1px white" mt="32px">
        <Slide slidesToScroll={1} slidesToShow={1} arrows={true}>
          {feedbacks.map((feedback) => {
            return (
              <Flex
                key={feedback.name}
                mt="64px"
                align="center"
                justify="center"
                flexDir="column"
                gap="16px"
                pb="64px"
              >
                <Image
                  src={feedback.photoSrc}
                  alt="feedback image"
                  boxSize="82px"
                  borderRadius="100%"
                />
                <Text fontSize={{ base: "16px", md: "18px" }}>
                  {feedback.name}
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  textAlign="justify"
                  maxW={{ base: "160px", md: "520px" }}
                >{`"${feedback.feedback}" - ${feedback.job}`}</Text>
              </Flex>
            );
          })}
        </Slide>
      </Box>
    </Box>
  );
};
