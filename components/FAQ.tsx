import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";
import { faqQuestions } from "../constants/faq";

export const FAQ = () => {
  return (
    <Box maxW="1446px" m="auto" p={{ base: "32px 0px", xl: "96px 0px" }}>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <SlideFade
            in={inView}
            transition={{ enter: { duration: animations } }}
          >
            <Text
              ref={ref}
              fontSize={{ base: "34px", md: "68px" }}
              id="projects"
            >
              Dúvidas Frequentes
            </Text>
          </SlideFade>
        )}
      </InView>
      <Box w="100%" mt="32px">
        {faqQuestions.map((question) => (
          <Accordion allowMultiple key={question.question}>
            <AccordionItem
              border="unset"
              color="black"
              bg="white"
              mb="16px"
              p="8px"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Text>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {question.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel
                p="16px 16px 16px 32px"
                fontSize={{ base: "14px", md: "16px" }}
                mt="16px"
              >
                {question.answer}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
