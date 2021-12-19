import React from "react";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";

import { PrimaryColor } from "../Constants/Colors";

const Filter = () => {
  return (
    <InputGroup
      w="200px"
      h="40px"
      boxShadow={"md"}
      borderWidth={0}
      borderRadius={"5px"}
      bgColor={"white"}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<BiSearch color={PrimaryColor} />}
      />
      <Input
        type="tel"
        placeholder="Filtre por localidade"
        borderWidth={0}
        focusBorderColor={PrimaryColor}
        color={PrimaryColor}
      />
    </InputGroup>
  );
};

export default Filter;
