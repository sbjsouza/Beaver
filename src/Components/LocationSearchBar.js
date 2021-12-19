import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
import { PrimaryColor } from "../Constants/Colors";

const LocationSearchBar = ({
  setValue = () => {},
  value = "",
  tagList = [],
}) => {
  const [isAutoCompleteEnabled, setIsAutoCompleteEnabled] = useState(false);

  const handlerAutoCompleteVisibility = (state) => {
    setIsAutoCompleteEnabled(state);
  };

  return (
    <Box w="100%">
      <InputGroup>
        <InputLeftElement
          h="100%"
          mx="2"
          pointerEvents="none"
          children={<BiSearch size="25px" color={PrimaryColor} />}
          zIndex={"4"}
        />
        <Input
          w="100%"
          h="60px"
          pl="12"
          bgColor="#F8F8F8"
          color={PrimaryColor}
          focusBorderColor={PrimaryColor}
          opacity="50%"
          borderRadius="10px"
          boxShadow="md"
          alignItems="center"
          value={value}
          placeholder={"Ex: Varzea, Recife"}
          onFocus={() => {
            handlerAutoCompleteVisibility(true);
          }}
          _focus={{
            backgroundColor: "white",
            opacity: "100%",
          }}
          onBlur={() => {
            setTimeout(() => {
              handlerAutoCompleteVisibility(false);
            }, 100);
          }}
          onChange={(newValue) => {
            setValue(newValue.target.value);
          }}
          zIndex={"3"}
        />
        {isAutoCompleteEnabled && (
          <Flex
            w="100%"
            h="200px"
            bgColor="white"
            borderRadius="10px"
            boxShadow="md"
            position={"absolute"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            overflow={"scroll"}
            top="20px"
            zIndex={"2"}
            p="2"
            pt="12"
          >
            {tagList.map((element) => (
              <Button
                w="100%"
                minH="40px"
                bgColor="gray.50"
                my="2"
                onClick={() => {
                  setValue(element.name);
                }}
              >
                <Text w="100%" textAlign={"left"} color={PrimaryColor}>
                  {element.name}
                </Text>
              </Button>
            ))}
          </Flex>
        )}
      </InputGroup>{" "}
    </Box>
  );
};

export default LocationSearchBar;
