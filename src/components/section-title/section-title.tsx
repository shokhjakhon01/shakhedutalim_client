import React from "react"
import { SectionTitleProps } from "./section-title.props"
import { Box, Heading, Text } from "@chakra-ui/react"

const SectionTitle = ({ subtitle, titles, ...props }: SectionTitleProps) => {
  return (
    <Box {...props}>
      <Heading as={"h3"}>{titles}</Heading>
      <Text mt={1} opacity={"0.8"}>
        {subtitle}
      </Text>
    </Box>
  )
}

export default SectionTitle
