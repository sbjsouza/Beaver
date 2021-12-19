import React from "react";

import { Box, Flex, Image, Wrap, WrapItem, Text } from "@chakra-ui/react";

import SideBar from "../Components/SideBar";

import { BackgroundColor } from "../Constants/Colors";

import sideMap from "../Resources/Images/sideMap.png";
import Card from "../Components/Card";

import mockData from "../database/LocalJson.json";
import CardGroup from "../Components/CardGroup";

const HomeView = () => {
  let selectedButtonIndex = 1;
  let data = mockData.data;
  let cardList = mockData["apartments"];

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
        {data.map((category) => (
          <Box p="8" mt="12">
            <Text mb="4">{category["category-name"]}</Text>
            <Wrap spacing="4">
              {category.data.map((card) => (
                <WrapItem>
                  <CardGroup
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
