import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

import { Box, Image } from "@chakra-ui/react";

import map from "../Resources/Images/map.png";
import mapAlternative from "../Resources/Images/mapAlternative.png";
import mapCustom from "../Resources/Images/mapCustom.png";

import { HOME } from "../Constants/Routes";

import Topbar from "../Components/TopBar";
import Onboardingsearch from "../Components/OnboardingSearch";

const Onboardingview = () => {
  const [budget, setBudget] = useState();
  const [destination, setDestination] = useState();
  const [sliderMinValue, setSliderMinValue] = useState(800);
  const [sliderMaxValue, setSliderMaxValue] = useState(2100);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    console.log("destination: ", destination);
    if (destination !== undefined) {
      handlerSearchButtonState(false);
    }
  }, [destination]);

  const handlerBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handlerDestination = (newDestination) => {
    setDestination(newDestination);
  };

  const onClickSearchHandler = () => {
    history.push(HOME);
  };

  const onChangeSlider = (values) => {
    console.log("Values: ", values, values.first);
    setSliderMinValue(values[0]);
    setSliderMaxValue(values[1]);
  };

  const handlerSearchButtonState = (newState) => {
    setIsSearchButtonDisabled(newState);
  };

  const tagSuggestion = [
    "Recife, PE",
    "Olinda, PE",
    "Belo Horizonte, MG",
    "Campina Grande, PB",
    "Rio Grande do Sul, RS",
  ];

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
        tagSuggestion={tagSuggestion}
        isSearchButtonDisabled={isSearchButtonDisabled}
        onClickSearch={onClickSearchHandler}
      />
    </Box>
  );
};

export default Onboardingview;
