import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const WhereBlock = () => (
  <Box mb={5}>
    <Heading variant='serif-heading' mb={1} ml={-5}>
      Where
    </Heading>
    <Text textStyle='information'>10965 Springfield Pike</Text>
    <Text textStyle='information'>Cincinnati, OH 45246</Text>
  </Box>
);

export default WhereBlock;
