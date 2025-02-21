import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderRadius: "md", // change the border radius
    borderColor: "blue.500" // change the border color
  }
});

const sizes = {
  // define custom styles for xl size
  xl: definePartsStyle({
    control: { w: "6", h: "6" },
    label: { fontSize: "xl" }
  })
};


// define custom variant
const variants = {
  groove: definePartsStyle({
    control: {
      borderRadius: 10,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "gray.100",
      background: "gray.100",

      _checked: {
        background:"#D39D12",
        borderColor: "#D39D12",

        _hover: {
          bg: "gray.700",
          borderColor: "gray.700"
        }
      },
      _dark: {
        borderColor: "purple.200",
        background: "purple.200",

        _hover: {
          bg: "gray.700",
          borderColor: "gray.700"
        }
      },
      _hover: {
        bg: "gray.700",
        borderColor: "gray.700"
      }
    }
  })
};

// export the component theme
export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
});