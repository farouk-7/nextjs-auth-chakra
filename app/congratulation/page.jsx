"use client"

import { Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Congratulation = () => {
    const router = useRouter()
    useEffect(() => {
        // Set a timeout to navigate after 5 seconds (5000ms)
        const timeout = setTimeout(() => {
          router.push('/welcome'); // Replace '/new-page' with your desired route
        }, 5000);
    
        // Clean up the timeout if the component is unmounted
        return () => clearTimeout(timeout);
      }, [router]);
  return (
    <Box
      h={"100vh"}
      justify={"space-between"}
      overflow={"hidden"}
      bg={"black"}
      color={"#fff"}
    >
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
        <Image src={"/logo.png"} alt="" height={100} width={100} />
        <Text fontSize={"30px"} fontWeight={"bold"} pb={"10px"}>Congratulation Your Account is Ready</Text>
        <Text textAlign={"center"} maxW={"450px"}>Congratulation you've successfully created your account. Now, let's get you set up.</Text>
      </Flex>
    </Box>
  );
};

export default Congratulation;
