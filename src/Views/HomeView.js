import React, { useEffect, useState } from "react";

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

import CardGroupAlt from "../Components/CardGroupAlt";

import { PrimaryColor } from "../Constants/Colors";
import Filter from "../Components/Filter";
import FilterButton from "../Components/FilterButton";

import axios from "axios";
import { getNeighborhoodData } from "../Constants/Endpoints";

const HomeView = () => {
  const [data, setData] = useState();
  let selectedButtonIndex = 1;

  const location = useLocation();
  const state = location.state;

  const history = useHistory();

  useEffect(() => {
    axios
      .get(getNeighborhoodData + state.destination)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

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
        <Text
          px="8"
          my="6"
          fontSize={"21px"}
          fontWeight={"600"}
          color={PrimaryColor}
        >
          Combos
        </Text>
        {data?.map((combo) => (
          <Box px="8" mt="2">
            <Wrap spacing="4">
              <WrapItem>
                <CardGroupAlt
                  firstCard={
                    <Card
                      imageUrl={combo.data.moradia.imageUrl}
                      imageAlt={combo.data.moradia.imageAlt}
                      tag1={combo.data.moradia.tag1}
                      tag2={combo.data.moradia.tag2}
                      isLowPrice={combo.data.moradia.isLowPrice}
                      title={combo.data.moradia.title}
                      formattedPrice={combo.data.moradia.formattedPrice}
                      reviewCount={combo.data.moradia.reviewCount}
                      rating={combo.data.moradia.rating}
                    />
                  }
                  secondCard={
                    <Card
                      imageUrl={combo.data.transporte.imageUrl}
                      imageAlt={combo.data.transporte.imageAlt}
                      tag1={combo.data.transporte.tag1}
                      tag2={combo.data.transporte.tag2}
                      isLowPrice={combo.data.transporte.isLowPrice}
                      title={combo.data.transporte.title}
                      formattedPrice={combo.data.transporte.formattedPrice}
                      reviewCount={combo.data.transporte.reviewCount}
                      rating={combo.data.transporte.rating}
                    />
                  }
                  value={combo.totalPrice}
                  cashbackPercentage={combo.cashbackPercentage}
                  cashbackValue={combo.cashbackValue}
                />
              </WrapItem>
            </Wrap>
          </Box>
        ))}
      </Box>
      <Image w="580px" h="100%" src={sideMap} m="2" top="4" position="sticky" />
    </Flex>
  );
};

export default HomeView;
