import React from "react";

import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

import { PrimaryColor } from "../Constants/Colors";

const CardGroupAlt = ({
  firstCard,
  secondCard,
  value = "1320.00",
  cashbackPercentage = 15,
  cashbackValue = "198.00",
}) => {
  return (
    <Flex w="100%" bgColor="red.50" borderRadius={10} p="6" my="2">
      <Flex w="100%" alignItems={"center"}>
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
      <Flex mx="6" justifyContent={"center"} alignItems={"center"}>
        <Divider orientation="vertical" h="340px" />
      </Flex>
      <Flex
        mt="8"
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box w="100%" alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Flex w="100%" alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Text fontWeight={"700"} fontSize={"21px"} color="black.400">
                R${value}/
              </Text>
              <Text fontSize={"17px"} fontWeight={"700"} color={PrimaryColor}>
                mês
              </Text>
            </Flex>
            <Flex w="100%" alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Text fontWeight={"400"} fontSize={"17px"} color={PrimaryColor}>
                -R${cashbackValue}{" "}
                <text style={{ fontSize: "12px", color: "black" }}>
                  de cashback
                </text>
              </Text>
            </Flex>
            <Divider mt="2" />
            <Flex w="100%" alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Text fontWeight={"700"} fontSize={"29px"} color="black.400">
                R${parseFloat(Number(value) - Number(cashbackValue)).toFixed(2)}
                /
              </Text>
              <Text fontSize={"17px"} fontWeight={"700"} color={PrimaryColor}>
                mês
              </Text>
            </Flex>
          </Box>
          <Flex
            w="100%"
            mt="8"
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
        </Box>
        <Box
          w="100%"
          pt="4"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Button w="100%" size="lg" bgColor={"red.100"} color="red.800" mb="6">
            Comprar combo
          </Button>
          <Text fontSize={"12px"}>
            * Os valores calculados com transporte público levam em conta apenas
            os dias úteis.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardGroupAlt;
