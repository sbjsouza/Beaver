import React from "react";

import {
  Box,
  Flex,
  Image,
  Wrap,
  WrapItem,
  Text,
  Spacer,
} from "@chakra-ui/react";

import { useHistory, useLocation } from "react-router";

import SideBar from "../Components/SideBar";

import { BackgroundColor } from "../Constants/Colors";

import sideMap from "../Resources/Images/sideMap.png";
import Card from "../Components/Card";

import mockData from "../database/LocalJson.json";
import CardGroupAlt from "../Components/CardGroupAlt";

import { PrimaryColor } from "../Constants/Colors";
import Filter from "../Components/Filter";
import FilterButton from "../Components/FilterButton";

const HomeView = () => {
  let selectedButtonIndex = 1;
  let data = mockData.data;

  const location = useLocation();
  const state = location.state;

  console.log("Destination: ", state);

  const history = useHistory();

  return (
    <Flex
      w="100%"
      h="100%"
      bgColor={BackgroundColor}
      position="relative"
      justifyContent="space-between"
    >
      <SideBar selectedButtonIndex={selectedButtonIndex} />
      <Box ml="60px">
        <Flex w="100%" mt="40px" px="8">
          <Filter />
          <Spacer maxW="20px" />
          <FilterButton />
        </Flex>

        {data.map((category) => (
          <Box p="8" mt="0">
            <Text
              mb="4"
              fontSize={"21px"}
              fontWeight={"600"}
              color={PrimaryColor}
            >
              {category["category-name"]}
            </Text>
            <Wrap spacing="4">
              {category.data.map((card) => (
                <WrapItem>
                  <CardGroupAlt
                    firstCard={
                      <Card
                        imageUrl={card.imageUrl}
                        imageAlt={card.imageAlt}
                        tag1={card.tag1}
                        tag2={card.tag2}
                        isLowPrice={card.isLowPrice}
                        title={card.title}
                        formattedPrice={card.formattedPrice}
                        reviewCount={card.reviewCount}
                        rating={card.rating}
                      />
                    }
                    secondCard={
                      <Card
                        imageUrl={card.imageUrl}
                        imageAlt={card.imageAlt}
                        tag1={card.tag1}
                        tag2={card.tag2}
                        isLowPrice={card.isLowPrice}
                        title={card.title}
                        formattedPrice={card.formattedPrice}
                        reviewCount={card.reviewCount}
                        rating={card.rating}
                      />
                    }
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Box>
      <Image w="580px" h="100%" src={sideMap} m="2" top="4" position="sticky" />
    </Flex>
  );
};

export default HomeView;
