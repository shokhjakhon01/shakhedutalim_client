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
import Image from "next/image"
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from "react-icons/bs"
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi"
import { MdOutlineContactSupport } from "react-icons/md"
import Link from "next/link"
import { HeaderProps } from "./header.props"
import { language } from "src/config/constants"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/router"

export const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const changeLanguage = (lng: string) => {
    router.replace(router.asPath)
    i18n.changeLanguage(lng)
  }
  return (
    <Box
      zIndex={99999}
      width={"full"}
      height={"10vh"}
      px={10}
      borderBottom={"1px"}
      pos={"fixed"}
      left={0}
      top={0}
      right={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
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
          <Menu placement="bottom">
            <MenuButton
              as={Button}
              rightIcon={<BsTranslate />}
              aria-label="translate"
              colorScheme="cyan"
              variant={"outline"}
            >
              {i18n.resolvedLanguage.toUpperCase()}
            </MenuButton>
            <MenuList p={0}>
              {language.map((item) => (
                <MenuItem
                  key={item.lng}
                  onClick={() => changeLanguage(item.lng)}
                  icon={<item.icon />}
                  backgroundColor={
                    i18n.resolvedLanguage == item.lng ? "cyan.500" : ""
                  }
                >
                  {item.nativeLng}
                </MenuItem>
              ))}
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
            {t("login", { ns: "layout" })}
          </Button>
        </HStack>
      </Flex>
    </Box>
  ) as JSX.Element
}
