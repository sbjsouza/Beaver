import React from "react";

import { Flex, Tag } from "@chakra-ui/react";

import { PrimaryColor, PrimaryBackgroundColor } from "../Constants/Colors";

const TagRow = ({ tagList = [] }) => {
  return (
    <Flex w="100%" h="40px">
      {tagList.map((tag) => (
        <Tag
          mr="2"
          px="2"
          h="8"
          bgColor={PrimaryBackgroundColor}
          color={PrimaryColor}
          borderRadius="15px"
          opacity="80%"
          cursor="pointer"
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default TagRow;
