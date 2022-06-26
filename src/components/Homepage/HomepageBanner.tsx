import * as React from "react";
import { Box, Center, Heading, Spacer, VStack } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const HomepageBanner = () => (
  <Center w='full' minH='0.5'>
    <Spacer h='md' />
    <StaticImage
      src='../../images/golf_classic-ashleys-memorial-fund.png'
      alt="Ashley's Memorial Fund Golf Classic"
      placeholder='tracedSVG'
      width={748}
      height={681}
      loading='eager'
      style={{
        width: "100%",
        maxWidth: "350px",
        height: "auto",
      }}
    />
    <Spacer h='md' />
  </Center>
);

export default HomepageBanner;
