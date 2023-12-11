import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { navigation } from "src/config/constants"
import { SidebarProps } from "./sidebar.props"

const Sidebar = ({ toggle }: SidebarProps): JSX.Element => {
  const router = useRouter()
  return (
    <Box
      zIndex={999999}
      w={{ base: "full", lg: "300px" }}
      h={"90vh"}
      pos={"fixed"}
      left={{ base: toggle ? 0 : "-100%", lg: 0 }}
      top={"10vh"}
      overflowY={"scroll"}
      bg={useColorModeValue("gray.50", "gray.900")}
      borderRight={"1px"}
      borderRightColor={useColorModeValue("gray.300", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
      css={{
        "&::webkit-scrollbar": { width: "1px" },
        "&::webkit-scrollbar-track": { width: "1px" },
        "&::webkit-scrollbar-thumb": { background: "transparent" },
      }}
      transition={"all .4s ease"}
    >
      <Container maxW={"container.xl"}>
        {navigation.map((item) => (
          <Box key={item.title} mt={10}>
            <Text>{item.title}</Text>
            {item.links.map((link) => {
              const active = router.asPath == link.route
              return (
                <Link key={link.label} href={link.route}>
                  <Button
                    colorScheme="cyan"
                    variant={active ? "solid" : "outline"}
                    w={"full"}
                    justifyContent={"flex-start"}
                    h={14}
                    mt={2}
                  >
                    <HStack gap={2}>
                      <Icon as={link.icon} />
                      <Text>{link.label}</Text>
                    </HStack>
                  </Button>
                </Link>
              )
            })}
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default Sidebar
