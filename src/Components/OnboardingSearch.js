import React from "react";

import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import LocationSearchBar from "./LocationSearchBar";
import TagRow from "./TagRow";
import PriceSlider from "./PriceSlider";

import { BiChevronRight } from "react-icons/bi";

import { PrimaryColor, PrimaryBackgroundColor } from "../Constants/Colors";

const OnboardingSearch = ({
  sliderMinValue = 0,
  sliderMaxValue = 0,
  isSearchButtonDisabled,
  budget = "",
  destination = "",
  tagSuggestion = [],
  handlerBudget = () => {},
  handlerDestination = () => {},
  onClickSearch = () => {},
  onChangeSlider = () => {},
}) => {
  return (
    <Box
      w="730px"
      h="426px"
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
            tagList={tagSuggestion}
          />
        </Flex>
        <Flex my="6">
          <Text fontSize={"16px"} fontWeight={"900"}>
            Quanto você quer gastar mensalmente?
          </Text>
        </Flex>
        <Flex>
          <PriceSlider
            onChangeSlider={onChangeSlider}
            sliderMinValue={sliderMinValue}
            sliderMaxValue={sliderMaxValue}
          />
          <Button
            w="190px"
            h="60px"
            mx="2"
            borderRadius="10px"
            bgColor={PrimaryColor}
            color="white"
            size="lg"
            isDisabled={isSearchButtonDisabled}
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
        <Spacer h="35px" />
        <TagRow tagList={tagSuggestion} />
      </Box>
    </Box>
  );
};

export default OnboardingSearch;
