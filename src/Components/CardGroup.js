import React from "react";

import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

import { PrimaryColor } from "../Constants/Colors";

const CardGroup = ({
  firstCard,
  secondCard,
  cashbackPercentage = 0,
  cashbackValue = 0,
}) => {
  return (
    <Box w="100%" bgColor="red.50" borderRadius={10} p="6">
      <Flex alignItems={"center"}>
        <Box>
          <Text fontWeight="700" py="2">
            Moradia
          </Text>
          {firstCard}
        </Box>
        <Text ml="5" fontSize={"30px"} fontWeight={"300"} color={"red.500"}>
          +
        </Text>
        <Spacer w="6" />
        <Box>
          <Text fontWeight="700" py="2">
            Alimentação
          </Text>
          {secondCard}
        </Box>
      </Flex>
      <Box mt="6">
        <Flex w="100%" alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            w="100%"
            maxW={"430px"}
            bgColor="RGBA(241,143,125,0.1)"
            borderRadius={"3px"}
            p="3"
          >
            <Text>
              Este combo Beaver garante até{" "}
              <b> {cashbackPercentage}% de cashback</b>. Você economiza{" "}
              <text style={{ color: PrimaryColor, fontWeight: "Bold" }}>
                R$
                {cashbackValue}.
              </text>
            </Text>
          </Flex>
          <Flex w="180px" alignItems={"flex-end"}>
            <Text fontWeight={"700"} fontSize={"29px"} color="black.400">
              R$1340.00/
            </Text>
            <Text fontSize={"17px"} fontWeight={"700"} color={PrimaryColor}>
              mês
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          pt="4"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Text fontSize={"12px"}>
            * Os valores calculados com transporte público levam em conta apenas
            os dias úteis.
          </Text>
          <Button size="lg" bgColor={"red.100"} color="red.800">
            Comprar combo
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardGroup;
