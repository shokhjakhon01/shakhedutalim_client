import {
  Button,
  Card,
  CardBody,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import { VscDebugStart } from "react-icons/vsc"
import React from "react"
import { FaNodeJs } from "react-icons/fa"

const Hero = () => {
  return (
    <Card mt={10}>
      <CardBody p={10}>
        <Grid
          gridTemplateColumns={{ base: "100%", md: "50% 50%" }}
          gap={5}
          justifyContent={"center"}
          alignContent={"center"}
          minH={"50vh"}
        >
          <Stack spacing={3}>
            <Heading>Find a perfect online Courses</Heading>
            <Text>
              You can access 10000+ different courses from 1000+ professional
              trainers from there
            </Text>
            <Grid gridTemplateColumns={{ base: "100%", md: "50% 50%" }} gap={5}>
              <Button h={14} colorScheme="cyan" rightIcon={<VscDebugStart />}>
                Start Learning
              </Button>
              <Button h={14} colorScheme="cyan" variant={"outline"}>
                Become Instructors
              </Button>
            </Grid>
          </Stack>
          <Icon
            as={FaNodeJs}
            w={400}
            h={240}
            justifySelf={"center"}
            opacity={".8"}
          />
        </Grid>
      </CardBody>
    </Card>
  )
}

export default Hero
