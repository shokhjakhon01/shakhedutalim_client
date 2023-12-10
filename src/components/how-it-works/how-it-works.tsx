import React, { Fragment } from "react"
import SectionTitle from "../section-title/section-title"
import {
  FinishRightIcon,
  OnlineCourseIcon,
  OnlineLearningIcon,
  OnlineStudentIcon,
  RightLineIcon,
} from "src/icons"
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

const HowItWorks = () => {
  const backgroundColor = useColorModeValue("gray.200", "gray.700")
  return (
    <>
      <SectionTitle
        textAlign={"center"}
        titles="How it works?"
        subtitle="10,000 unique online courses list designs"
      ></SectionTitle>
      <SimpleGrid mt={10} columns={5} spacing={10} alignItems={"center"}>
        {data.map((item, i) => {
          const odd = i % 2
          return (
            <Fragment key={i}>
              {!odd ? (
                <Stack justify={"center"}>
                  <Flex
                    w={100}
                    h={100}
                    justify={"center"}
                    align={"center"}
                    backgroundColor={backgroundColor}
                    borderRadius={"full"}
                  >
                    {item.icon}
                  </Flex>
                  <Text textAlign={"center"}>{item.title}</Text>
                </Stack>
              ) : (
                <Stack justify={"center"}>{item.icon}</Stack>
              )}
            </Fragment>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default HowItWorks

const data = [
  {
    title: "Sign up to Platform",
    icon: <OnlineCourseIcon />,
  },
  {
    icon: <RightLineIcon />,
  },
  {
    title: "Find Courses",
    icon: <OnlineLearningIcon />,
  },
  {
    icon: <FinishRightIcon />,
  },
  {
    title: "Learning Relaxing",
    icon: <OnlineStudentIcon />,
  },
]
