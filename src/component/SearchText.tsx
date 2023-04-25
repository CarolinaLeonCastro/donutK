import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

function SearchText() {
  return (
    <Card
      bg="none"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0)"
      //border={"1px"}
      mt={"10"}
    >
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="orange.400"
            size=""
          >
            TRY THE BEST
            <Text as="span" color="pink.400" margin={"10px"}>
              DONUTS
            </Text>
            IN TOWN
          </Heading>

          <Text color="" fontSize="xl">
            Who loves donuts? Or perhaps it would be easier to ask, « Who
            doesn’t love donuts? » So, what are you waiting for, order our fresh
            donuts now!
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default SearchText;
