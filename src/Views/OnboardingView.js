import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

import { Box, Image } from "@chakra-ui/react";

import mapCustom from "../Resources/Images/mapCustom.png";

import { HOME } from "../Constants/Routes";

import Topbar from "../Components/TopBar";
import Onboardingsearch from "../Components/OnboardingSearch";

import axios from "axios";
import { getAvailableNeighborhoods } from "../Constants/Endpoints";

const Onboardingview = () => {
  const [budget, setBudget] = useState();
  const [destination, setDestination] = useState();
  const [sliderMinValue, setSliderMinValue] = useState(800);
  const [sliderMaxValue, setSliderMaxValue] = useState(2100);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  const [destinationList, setDestinationList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(getAvailableNeighborhoods)
      .then((res) => {
        handlerDestinationList(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  useEffect(() => {
    if (destination !== undefined) {
      handlerSearchButtonState(false);
    }
  }, [destination]);

  const handlerDestinationList = (list) => {
    setDestinationList(list);
  };

  const handlerBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handlerDestination = (newDestination) => {
    setDestination(newDestination);
  };

  const onClickSearchHandler = () => {
    history.push({
      pathname: HOME,
      state: {
        destination,
        sliderMinValue,
        sliderMaxValue,
      },
    });
  };

  const onChangeSlider = (values) => {
    console.log("Values: ", values, values.first);
    setSliderMinValue(values[0]);
    setSliderMaxValue(values[1]);
  };

  const handlerSearchButtonState = (newState) => {
    setIsSearchButtonDisabled(newState);
  };

  return (
    <Box
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        w="100%"
        h="100vh"
        src={mapCustom}
        position="absolute"
        zIndex="0"
      />
      <Topbar selectedButtonIndex={0} />
      <Onboardingsearch
        sliderMinValue={sliderMinValue}
        sliderMaxValue={sliderMaxValue}
        onChangeSlider={onChangeSlider}
        budget={budget}
        destination={destination}
        handlerBudget={handlerBudget}
        handlerDestination={handlerDestination}
        tagSuggestion={destinationList}
        isSearchButtonDisabled={isSearchButtonDisabled}
        onClickSearch={onClickSearchHandler}
      />
    </Box>
  );
};

export default Onboardingview;
