import React from "react";

import { Button } from "@chakra-ui/react";

import { BiFilterAlt } from "react-icons/bi";

import { PrimaryColor } from "../Constants/Colors";

const FilterButton = () => {
  return (
    <Button
      leftIcon={<BiFilterAlt />}
      w="170px"
      h="40px"
      boxShadow={"md"}
      borderRadius={"5px"}
      bgColor="white"
      color={PrimaryColor}
    >
      Recomendados
    </Button>
  );
};

export default FilterButton;
