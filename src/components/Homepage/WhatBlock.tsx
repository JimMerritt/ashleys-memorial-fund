import * as React from "react";
import {
  Box,
  ListItem,
  UnorderedList,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";

const WhatBlock = () => (
  <Box mb={5}>
    <HStack mb={5} h={12}>
      <Text w={16} fontSize='2xl'>
        $75
      </Text>
      <Divider borderColor='brand.900' orientation='vertical' />
      <Text fontSize='2xl'>Golfer</Text>
    </HStack>
    <HStack mb={5} h={12}>
      <Text w={16} fontSize='2xl'>
        $300
      </Text>
      <Divider borderColor='brand.900' orientation='vertical' />
      <Text fontSize='2xl'>Foursome</Text>
    </HStack>
    <UnorderedList mb={5}>
      <ListItem>18 holes</ListItem>
      <ListItem>Best Ball Scramble</ListItem>
      <ListItem>Dinner immediately following</ListItem>
      <ListItem>Beer and non-alcoholic drinks</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Prizes</ListItem>
    </UnorderedList>
    <Text fontSize='sm' fontStyle='italic' fontFamily='"EB Garamond", serif'>
      Checks made payable to: Ashley’s Memorial Fund
    </Text>
  </Box>
);

export default WhatBlock;
