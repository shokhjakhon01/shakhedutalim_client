import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { format } from "date-fns"
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <Box
      pl={{ base: 0, lg: "320px" }}
      mt={10}
      w={"full"}
      borderTop={"1px"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
      h={"10vh"}
    >
      <Flex justify={"space-between"} align={"center"} h={"full"}>
        <Text>
          © {format(new Date(), "yyyy")} Shakhedutalim. All Rights Reserved
        </Text>
        <Flex gap={3} mr={10}>
          <IconButton
            aria-label="telegram icon"
            colorScheme="cyan"
            icon={<FaTelegram />}
            variant={"outline"}
          />
          <IconButton
            aria-label="instagram icon"
            colorScheme="cyan"
            icon={<FaInstagram />}
            variant={"outline"}
          />
          <IconButton
            aria-label="youtube icon"
            colorScheme="cyan"
            icon={<FaYoutube />}
            variant={"outline"}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
