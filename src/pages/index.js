import { Box, Heading } from "@chakra-ui/react";
import * as React from "react";
import BenefittingBlock from "../components/Homepage/BenefittingBlock";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import WhatBlock from "../components/Homepage/WhatBlock";
import WhenBlock from "../components/Homepage/WhenBlock";
import WhereBlock from "../components/Homepage/WhereBlock";

const IndexPage = () => (
  <main>
    <title>Ashley's Memorial Fund</title>
    <HomepageBanner />
    <Heading textAlign='center' w='full' size='lg'>
      Ashley's Memorial Fund
    </Heading>
    <Heading mb={2} textAlign='center' w='full' size='lg'>
      Golf Classic
    </Heading>
    <Box maxW={500} mx='auto' p={8}>
      <WhenBlock />
      <WhereBlock />
      <WhatBlock />
      <BenefittingBlock />
    </Box>
  </main>
);

export default IndexPage;
