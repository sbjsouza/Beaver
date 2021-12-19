import React from "react";

import { Box, Badge, Flex, Image } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const Card = ({
  imageUrl = "",
  imageAlt = "",
  tag1 = "",
  tag2 = "",
  isLowPrice = "",
  title = "",
  formattedPrice = "",
  reviewCount = "",
  rating = "",
}) => {
  return (
    <Box
      maxW="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      bgColor="white"
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="6">
        <Flex display="flex" alignItems="baseline" flexDirection="column">
          {isLowPrice && (
            <Badge mb="2" borderRadius="full" px="2" colorScheme="teal">
              Preço baixo
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {tag1} &bull; {tag2}
          </Box>
        </Flex>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / mês
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
