import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/eb-garamond/400.css";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const colors = {
  brand: {
    50: "#EFF7EE",
    100: "#D2E8CF",
    200: "#B5D9B0",
    300: "#98CA91",
    400: "#7BBB72",
    500: "#5EAC53",
    600: "#4B8A42",
    700: "#396732",
    800: "#264521",
    900: "#132211",
  },
  grayHeading: {
    50: "#F2F2F3",
    100: "#DADADD",
    200: "#C2C2C7",
    300: "#AAAAB1",
    400: "#92929B",
    500: "#7A7A85",
    600: "#62626A",
    700: "#494950",
    800: "#313135",
    900: "#18181B",
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        // backgroundColor: "brand.100",
      },
      p: {
        color: "brand.800",
      },
    },
  },
  fonts: {
    body: "'DM Sans', sans",
    heading: "'DM Sans', sans",
  },
  textStyles: {
    description: {
      fontFamily: "EB Garamond, serif",
    },
    information: {
      fontSize: "lg",
    },
  },
  colors,
  components: {
    Heading: {
      variants: {
        "serif-heading": {
          fontFamily: "EB Garamond, serif",
          fontStyle: "italic",
          textTransform: "lowercase",
          fontSize: "0.875rem",
          color: "brand.300",
        },
      },
    },
  },
});

export default theme;
