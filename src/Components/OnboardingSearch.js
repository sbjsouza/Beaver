import React from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  Spacer,
} from "@chakra-ui/react";

import LocationSearchBar from "./LocationSearchBar";
import TagRow from "./TagRow";

import { BiChevronRight } from "react-icons/bi";

import { PrimaryColor, PrimaryBackgroundColor } from "../Constants/Colors";

const OnboardingSearch = ({
  budget = "",
  destination = "",
  tagSuggestion = [],
  handlerBudget = () => {},
  handlerDestination = () => {},
  onClickSearch = () => {},
}) => {
  return (
    <Box
      w="730px"
      h="280px"
      p="6"
      borderRadius="10px"
      position="absolute"
      left="0"
      right="0"
      top="0"
      bottom="0"
      margin="auto"
      boxShadow="lg"
      style={{
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(216, 216, 216, 0.25)",
      }}
    >
      <Heading as="h2" size="lg" fontWeight="900" mt="4">
        Para onde deseja mudar?
      </Heading>
      <Box mt="12">
        <Flex>
          <LocationSearchBar
            value={destination}
            setValue={handlerDestination}
          />
          <NumberInput
            focusBorderColor={PrimaryColor}
            onChange={(newBudget) => handlerBudget(newBudget)}
            value={budget}
          >
            <NumberInputField
              w="160px"
              h="60px"
              bgColor="#F8F8F8"
              color={PrimaryColor}
              focusBorderColor={PrimaryColor}
              opacity="50%"
              borderRadius="10px"
              boxShadow="md"
              placeholder={"R$1200,00/mês"}
            />
          </NumberInput>
          <Button
            w="190px"
            h="60px"
            mx="2"
            borderRadius="10px"
            bgColor={PrimaryColor}
            color="white"
            size="lg"
            onClick={() => {
              onClickSearch();
            }}
            _hover={{
              bgColor: { PrimaryBackgroundColor },
            }}
          >
            Buscar
            <BiChevronRight size="30px" mr="0" />
          </Button>
        </Flex>

        <Spacer h="20px" />
        <TagRow tagList={tagSuggestion} />
      </Box>
    </Box>
  );
};

export default OnboardingSearch;
