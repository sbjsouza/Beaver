import React from "react";

import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
import { PrimaryColor } from "../Constants/Colors";

const LocationSearchBar = ({ setValue = () => {}, value = "" }) => {
  return (
    <InputGroup>
      <InputLeftElement
        h="100%"
        mx="2"
        pointerEvents="none"
        children={<BiSearch size="25px" color={PrimaryColor} />}
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
        onChange={(newValue) => {
          setValue(newValue.target.value);
        }}
      />
    </InputGroup>
  );
};

export default LocationSearchBar;
