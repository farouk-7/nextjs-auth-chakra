import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg={"teal"} h="100vh">
      <Text fontSize={"30px"} fontWeight={"bold"}>The Boy is Neat and Tidy and Articulated</Text>
    </Box>
  );
}
