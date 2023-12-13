import {
  Avatar,
  Box,
  Card,
  CardBody,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { ArticlePageComponentProps } from "./article-page-component.props"
import Carousel from "react-multi-carousel"
import { testimonialsCarousel } from "src/config/carousel"
import { format } from "date-fns"

const ArticlePageComponent = ({ articles }: ArticlePageComponentProps) => {
  const cardBackground = useColorModeValue("white", "gray.900")
  return (
    <>
      <Card my={10}>
        <CardBody>
          <Carousel
            responsive={testimonialsCarousel}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite
          >
            {articles.map((item) => (
              <Box
                key={item.id}
                w={"full"}
                height={"60vh"}
                backgroundImage={item.image[0].url}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                pos={"relative"}
              >
                <Box
                  pos={"absolute"}
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg={"rgba(0,0,0, .7)"}
                >
                  <Stack
                    justify={"center"}
                    spacing={3}
                    w={"70%"}
                    pl={10}
                    pos={"relative"}
                    h={"full"}
                  >
                    <Heading>{item.title}</Heading>
                    <Text>{item.excerpt}</Text>
                    <HStack>
                      <Avatar src={item.author.avatar.url} />
                      <Text>{item.author.name}</Text>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Carousel>
        </CardBody>
      </Card>
      <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={4}>
        {articles.map((item) => (
          <Box
            key={item.id}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            bgColor={cardBackground}
          >
            <Image
              src={item.image[0].url}
              alt={item.title}
              borderRadius={"lg"}
              height={"293px"}
              w={"full"}
              objectFit={"cover"}
              mb={5}
            />
            <Stack>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {item.title}
              </Heading>
              <Text color={"gray.500"}>{item.excerpt}</Text>
            </Stack>
            <Divider my={5} />
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={item.author.avatar.url} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{item.author.name}</Text>
                <Text color={"gray.500"}>
                  {format(new Date(item.createdAt), "dd MMM, yyyy")}
                </Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Grid>
    </>
  )
}

export default ArticlePageComponent
