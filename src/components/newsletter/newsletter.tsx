import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react"
import React from "react"
import SectionTitle from "../section-title/section-title"

const Newsletter = () => {
  return (
    <Card mt={10}>
      <CardBody
        minH={"50vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack spacing={3}>
          <SectionTitle
            titles="Subscribe our NewsLetter"
            subtitle="Salom hammaga hamma yaxshimi salomatmiszlar"
            textAlign={"center"}
            maxW={"container.sm"}
          />
          <Box pos={"relative"}>
            <Input
              h={14}
              w={"full"}
              bg={"white"}
              color={"gray.900"}
              placeholder={"Your Email..."}
              _placeholder={{ color: "gray.500" }}
            />
            <Button
              pos={"absolute"}
              right={2}
              top={2}
              zIndex={99}
              colorScheme="cyan"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default Newsletter
