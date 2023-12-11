import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import SectionTitle from "../section-title/section-title"
import { CourseType } from "src/interfaces/course.interface"
import Carousel from "react-multi-carousel"
import ReactStars from "react-stars"
import { CiViewList } from "react-icons/ci"
import { AiOutlineClockCircle } from "react-icons/ai"
import { SiGoogleanalytics } from "react-icons/si"
import { coursesCarousel } from "src/config/carousel"
import { useTranslation } from "react-i18next"

const PopularCourses = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionTitle
        titles={t("popular_courses_title", { ns: "home" })}
        subtitle={t("popular_courses_description", { ns: "home" })}
      />
      <Carousel
        responsive={coursesCarousel}
        arrows={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
      >
        {data.map((item, i) => (
          <Stack key={i} spacing={3} p={3} cursor={"pointer"}>
            <Image
              src={item.image}
              alt={item.title}
              objectFit={"cover"}
              h={"210px"}
              w={"full"}
              borderRadius={"lg"}
            />
            <HStack>
              <Text color={"#e59819"}>{item.reviewAvarage.toFixed(1)}</Text>
              <ReactStars
                edit={false}
                value={item.reviewAvarage}
                color2="#e59819"
              />
              <Text opacity={".8"}>({item.reviewCount})</Text>
            </HStack>
            <Heading fontSize={"xl"}>{item.title}</Heading>
            <HStack>
              <Flex alignItems={"center"} gap={1}>
                <Icon as={CiViewList} />
                <Text>{item.lessonCount} lesson</Text>
              </Flex>
              <Flex alignItems={"center"} gap={1}>
                <Icon as={AiOutlineClockCircle} />
                <Text>{item.totalHours} hour</Text>
              </Flex>
              <Flex alignItems={"center"} gap={1}>
                <Icon as={SiGoogleanalytics} />
                <Text>{item.level}</Text>
              </Flex>
            </HStack>
            <Divider />
            <Flex justifyContent={"space-between"} align={"center"}>
              <HStack align={"center"}>
                <Image
                  src={item.author.avatar}
                  alt={item.author.firstName}
                  w={50}
                  h={50}
                  borderRadius={"full"}
                />
                <Text>
                  {item.author.firstName} {item.author.lastName[0]}.
                </Text>
              </HStack>
              <Text>
                {item.price.toLocaleString("en-Us", {
                  style: "currency",
                  currency: "USD",
                })}
              </Text>
            </Flex>
          </Stack>
        ))}
      </Carousel>
    </>
  )
}

export default PopularCourses

const data: CourseType[] = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Javascript full course",
    lessonCount: 100,
    totalHours: 15,
    level: "Beginner",
    price: 20,
    reviewAvarage: 4.5,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Reactjs full course",
    lessonCount: 150,
    totalHours: 29.5,
    level: "Advanced",
    price: 30,
    reviewAvarage: 4.5,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Nodejs full course",
    lessonCount: 150,
    totalHours: 29.5,
    level: "Advanced",
    price: 30,
    reviewAvarage: 4,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
]
