import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import Logo from "../../icons/logo3.png"
import LogoPr from "../../icons/logopr.png"
import Image from "next/image"
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from "react-icons/bs"
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi"
import { MdOutlineContactSupport } from "react-icons/md"
import Link from "next/link"
import { EngIcons, RusIcons, TurkIcon, UzbIcons } from "src/icons"
import { HeaderProps } from "./header.props"

export const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box
      width={"full"}
      height={"10vh"}
      px={10}
      borderBottom={"1px"}
      pos={"fixed"}
      left={0}
      top={0}
      right={0}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex height={"full"} justify={"space-between"} align={"center"}>
        <HStack>
          <Icon
            as={BiMenuAltLeft}
            w={6}
            h={6}
            onClick={onToggle}
            cursor={"pointer"}
          />
          <Link href={"/"}>
            {colorMode === "light" ? (
              <Image width={200} height={50} src={Logo} alt="logo" />
            ) : (
              <Image width={200} height={50} src={Logo} alt="logo" />
            )}
          </Link>
        </HStack>
        <HStack>
          <IconButton
            aria-label="support"
            icon={<MdOutlineContactSupport />}
            colorScheme="cyan"
            variant={"ghost"}
          />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BsTranslate />}
              aria-label="translate"
              colorScheme="cyan"
              variant={"solid"}
            />
            <MenuList>
              <MenuItem icon={<UzbIcons />}>UZB</MenuItem>
              <MenuItem icon={<RusIcons />}>RUS</MenuItem>
              <MenuItem icon={<EngIcons />}>ENG</MenuItem>
              <MenuItem icon={<TurkIcon />}>TURK</MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            aria-label="color-mode"
            icon={
              colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />
            }
            colorScheme={"cyan"}
            variant={"outline"}
            onClick={toggleColorMode}
          />
          <Button rightIcon={<BiUserCircle />} colorScheme={"cyan"}>
            Login
          </Button>
        </HStack>
      </Flex>
    </Box>
  ) as JSX.Element
}
