import React from "react";

import { useHistory } from "react-router";

import { Avatar, Button, Flex, Image } from "@chakra-ui/react";

import { BiHome, BiCart } from "react-icons/bi";

import beaverLogo from "../Resources/Images/beaverLogo.png";
import { PrimaryColor, PrimaryBackgroundColor } from "../Constants/Colors";

import * as ROUTES from "../Constants/Routes";

const SideBar = ({ selectedButtonIndex = 0 }) => {
  const history = useHistory();

  return (
    <Flex
      w="60px"
      h="100vh"
      p="1"
      bgColor="white"
      boxShadow="lg"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={"column"}
      position="fixed"
    >
      <Image w="30px" h="20px" mt="4" ml="1" src={beaverLogo} />
      <Flex
        w="100%"
        h="100%"
        justifyContent="flex-start"
        mt="14"
        flexDirection={"column"}
      >
        <Button
          mb="2"
          bgColor={selectedButtonIndex === 0 ? PrimaryBackgroundColor : ""}
          onClick={() => {
            history.push(ROUTES.ONBOARDING);
          }}
        >
          <BiHome
            size="20px"
            color={selectedButtonIndex === 0 ? PrimaryColor : ""}
          />
        </Button>
        <Button
          mb="2"
          bgColor={selectedButtonIndex === 1 ? PrimaryBackgroundColor : ""}
        >
          <BiCart
            size="20px"
            color={selectedButtonIndex === 1 ? PrimaryColor : ""}
          />
        </Button>
      </Flex>
      <Flex mb="6">
        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
      </Flex>
    </Flex>
  );
};

export default SideBar;
