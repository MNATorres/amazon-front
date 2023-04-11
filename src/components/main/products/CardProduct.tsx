import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Card } from "../../../services/services";
import Certifications from "./certification/Certifications";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  description:
    "Aqui va la description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet, ab eaque esse dolorum iure nisi facilis, consequatur ipsa explicabo modi maiores asperiores velit laboriosam suscipit, architecto quibusdam sit fugit?",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function CardProduct() {
  const [dataCard, setDataCard] = useState<Card[]>([]);

  console.log(dataCard);

  useEffect(() => {
    async function loadCards() {
      const response = await fetch("http://localhost:9000/api/products");
      const data = await response.json();
      setDataCard(data);
      console.log(dataCard)
    }
    loadCards();
  }, []);

  return (
    <Box
      w={"100%"}
      display={"flex"}
      p={0}
      
      justifyContent="center"
      flexWrap={"wrap"}
    >
      {dataCard.map((element) => {
        return (
          <Flex
            w={{ base: "100%", md: "48%", lg: "45%", xl: "19%" }}
            minW={"270px"}
            justifyContent="center"
            my={{ base: 1, md: 0, lg: 0, xl: 0 }}
            mx={{ base: 0, md: 1, lg: 1, xl: 1 }}
            p={{ base: 0, md: 1, lg: 1, xl: 1 }}
          >
            <Box
              w={"100%"}
              borderWidth="1px"
              rounded="lg"
              shadow={{ base: "unset", md: "lg", lg: "lg", xl: "lg" }}
              position="relative"
              display={{ base: "flex", md: "unset", lg: "unset", xl: "unset" }}
              fontSize={{ base: 13, md: 16, lg: 16, xl: 16 }}
            >
              <Image
                m={"0 auto"}
                src={element.image}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
                p={{ base: 1, md: 5, lg: 5, xl: 5 }}
                objectFit={"contain"}
                maxH={{ base: "200px", md: "unset", lg: "unset", xl: "unset" }}
                w={{ base: "40%", md: "unset", lg: "unset", xl: "unset" }}
                minW={{ base: "40%", md: "unset", lg: "unset", xl: "unset" }}
              />

              <Box p={{ base: 2, md: 6, lg: 6, xl: 6 }}>
                <Flex>
                  <Text>{element.description}</Text>
                </Flex>

                <Flex alignContent="center" alignItems={"center"}>
                  <Box mx={2}>{element.starRatings}</Box>
                  <Rating
                    rating={data.rating}
                    numReviews={element.numComments}
                  />
                </Flex>

                <Box fontSize={{ base: 19, md: "2x1", lg: "2x1", xl: "2x1" }}>
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  {element.price.toFixed(2)}
                </Box>

                <Flex flexDir={"column"}>
                  {element.certification && (
                    <Certifications
                      imageCertification="https://m.media-amazon.com/images/I/119eCmXoiWL._SS200_.png"
                      titleCertification="Certificado para humanos"
                    />
                  )}
                  {element.alexa && (
                    <Certifications
                      imageCertification="https://m.media-amazon.com/images/I/11hfR5Cq9GL._SS200_.png"
                      titleCertification="Compatible con Alexa"
                    />
                  )}
                  {element.certificationClimate && (
                    <Certifications
                      imageCertification="https://m.media-amazon.com/images/I/216-OX9rBaL._SS200_.png"
                      titleCertification="Clima Pledge Friendly"
                    />
                  )}
                </Flex>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
}

export default CardProduct;
