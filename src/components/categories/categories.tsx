import React from "react"
import SectionTitle from "../section-title/section-title"
import Carousel from "react-multi-carousel"
import { categories, categoryCarousel } from "src/config/constants"
import { Box, Icon, Text, useColorModeValue } from "@chakra-ui/react"
const Categories = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.900")
  const fill = useColorModeValue("#020288", "gray.600")
  return (
    <>
      <SectionTitle
        titles="Top Categories"
        subtitle="Learn our courses with high quality"
      />
      <Carousel
        responsive={categoryCarousel}
        showDots={false}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite
      >
        {categories.map((item, i) => (
          <Box
            minH={"200px"}
            mx={2}
            backgroundColor={backgroundColor}
            textAlign={"center"}
            p={5}
            borderRadius={"lg"}
            cursor={"pointer"}
          >
            <Icon as={item.icon} w={20} h={20} fill={fill} />
            <Text mt={2} fontSize={"lg"}>
              {item.name}
            </Text>
          </Box>
        ))}
      </Carousel>
    </>
  )
}

export default Categories
