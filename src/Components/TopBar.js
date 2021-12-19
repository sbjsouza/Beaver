import React from "react";

import { Avatar, Button, Flex, Image } from "@chakra-ui/react";

import { BiHome, BiCart } from "react-icons/bi";

import beaverLogo from "../Resources/Images/beaverLogo.png";
import { PrimaryColor, PrimaryBackgroundColor } from "../Constants/Colors";

const Topbar = ({ selectedButtonIndex = 0 }) => {
  return (
    <Flex
      w="100%"
      h="60px"
      p="1"
      px="4"
      boxShadow={"lg"}
      justifyContent="space-between"
      alignItems="center"
      bgColor="white"
      position="absolute"
      zIndex="1"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Image w="30px" h="20px" mr="8" src={beaverLogo} />
        <Button
          bgColor={selectedButtonIndex === 0 ? PrimaryBackgroundColor : ""}
          mx="1"
        >
          <BiHome color={selectedButtonIndex === 0 ? PrimaryColor : ""} />
        </Button>
        <Button
          bgColor={selectedButtonIndex === 1 ? PrimaryBackgroundColor : ""}
          mx="1"
        >
          <BiCart color={selectedButtonIndex === 1 ? PrimaryColor : ""} />
        </Button>
      </Flex>
      <Flex>
        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
      </Flex>
    </Flex>
  );
};

export default Topbar;
