import * as React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

const BenefittingBlock = () => (
  <Box mb={5}>
    <Heading variant='serif-heading' mb={2} ml={-5}>
      Benefitting
    </Heading>
    <Heading mb={1} size='md'>
      Ashley's Memorial Fund
    </Heading>
    <Text mb={3} textStyle='description'>
      Ashley's Memorial Fund is a Donor Advised Fund developed to celebrate
      Ashley's life and legacy.
    </Text>
    <Text mb={3} textStyle='description'>
      Funds are used to support non-profit organizations providing services to
      children and families in need.
    </Text>
    <Text mb={5} textStyle='description'>
      All supported non-profits are evaluated to ensure they are financially
      stable, sustainable and represent the values held dear to Ashley's family
      which reflect Ashley's beautiful spirit.
    </Text>
    <Heading mb={3} size='md'>
      Reviv Family Support Foundation
    </Heading>
    <Link href='https://revivfamilysupport.org/' isExternal>
      https://revivfamilysupport.org/
    </Link>
  </Box>
);

export default BenefittingBlock;
