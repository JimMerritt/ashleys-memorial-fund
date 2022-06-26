import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const WhenBlock = () => (
  <Box mb={5}>
    <Heading variant='serif-heading' mb={1} ml={-5}>
      When
    </Heading>
    <Text textStyle='information' fontWeight='bold'>
      Sunday, July 24, 2022
    </Text>
    <Text textStyle='information'>Registration begins at Noon</Text>
    <Text textStyle='information'>Shotgun Start at 1:30pm</Text>
  </Box>
);

export default WhenBlock;
