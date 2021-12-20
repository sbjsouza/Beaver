import React from "react";

import {
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from "@chakra-ui/react";

const PriceSlider = ({
  onChangeSlider = () => {},
  sliderMinValue = 0,
  sliderMaxValue = 0,
}) => {
  return (
    <Flex
      w="100%"
      h="60px"
      borderRadius={"md"}
      justifyContent={"center"}
      alignItems={"flex-end"}
      p="2"
      px="7"
      bgColor="#F8F8F8"
      opacity="50%"
      borderRadius="10px"
      boxShadow="md"
    >
      <RangeSlider
        onChange={(val) => {
          onChangeSlider(val);
        }}
        defaultValue={[sliderMinValue, sliderMaxValue]}
        min={500}
        max={20000}
        step={100}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Flex position={"relative"} top={"-25px"} left={"15px"}>
            <Text fontWeight={"700"}>R${sliderMinValue}</Text>
          </Flex>
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Flex position={"relative"} top={"-25px"} left={"-20px"}>
            <Text fontWeight={"700"}>R${sliderMaxValue}</Text>
          </Flex>
        </RangeSliderThumb>
      </RangeSlider>
    </Flex>
  );
};

export default PriceSlider;
