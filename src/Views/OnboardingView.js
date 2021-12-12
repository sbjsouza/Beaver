import React, { useState } from "react";

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

  const history = useHistory();

  const handlerBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handlerDestination = (newDestination) => {
    setDestination(newDestination);
  };

  const onClickSearchHandler = () => {
    history.push(HOME);
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
        budget={budget}
        destination={destination}
        handlerBudget={handlerBudget}
        handlerDestination={handlerDestination}
        tagSuggestion={tagSuggestion}
        onClickSearch={onClickSearchHandler}
      />
    </Box>
  );
};

export default Onboardingview;
