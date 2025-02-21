'use client'

import { Box, Flex, Progress, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { ColorModeSwitcher } from "../components/ColorModeSwicher";
import { CustomBtn } from "../components/CustomBtn";
import { _COLORS } from "../constants/colors";
import { useRouter } from "next/navigation";
import Image from "next/image";


const FirstQuestion = () => {
  const router = useRouter()
  const handleSubmit=()=>{
    
  }
  const [value, setValue] = useState("1");
  return (
    <Box
      h={"100vh"}
      overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
      //   p={"10px 100px"}
    >
      <Flex justify={"space-between"} flexDir={"row"} gap={"50px"}>
        <Box p={"10px 50px"} flex={1}>
          <Image src={"/logo.png"} height={100} width={100} alt=""/>
          <Box my="70px">
            <Text pb={"30px"}>1/3</Text>
            <Text fontSize={"30px"}>
              Just a few quick questions to get started! First, have you worked
              as a freelancer before?
            </Text>
          </Box>
          <Flex align={"center"} justifyContent={"space-between"}>
            <Box
              border={"1px solid white"}
              h={"100px"}
              w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                <Image src={"/logo.png"} height={100} width={100} alt=""/>
                  <Text>I'm new to this</Text>
                </Box>
                <RadioGroup onChange={setValue} value={value}>
                  <Radio value={"1"} variant="groove"></Radio>
                </RadioGroup>
              </Flex>
            </Box>
            <Box
              border={"1px solid white"}
              h={"100px"}
              w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                <Image src={"/logo.png"} height={100} width={100} alt=""/>
                  <Text >I have experience</Text>
                </Box>
                <RadioGroup onChange={setValue} value={value} borderColor={"red"}>
                  <Radio value={"2"} variant="groove"></Radio>
                  
                </RadioGroup>
              </Flex>
            </Box>


            <Box
              border={"1px solid white"}
              h={"100px"}
              w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                <Image src={"/logo.png"} height={100} width={100} alt=""/>
                  <Text >This is what I do</Text>
                </Box>
                <RadioGroup onChange={setValue} value={value}>
                  <Radio value={"3"} variant="groove"></Radio>
                </RadioGroup>
              </Flex>
            </Box>
          </Flex>
          {/* <ColorModeSwitcher aria-label="toggle theme" position="absolute" bottom={4} left={4} /> */}
          <Flex mt={"70px"} align={"center"} justifyContent={"space-between"}> 
            <Box width={"150px"}>
            <Progress  value={45} size='xs' colorScheme={"red"}/>
            </Box>
            <Flex align={"center"} gap={"20px"}>
                <Text cursor={"pointer"} onClick={()=>{
                  router.push("/sign-in")
                }}>Skip For Now</Text>
                <CustomBtn text={"Next"} bg={_COLORS?.brand} width={"100px"} handleClick={handleSubmit}/>
            </Flex>
          </Flex>
        </Box>

        <Box flex={1} bg="#fff" h={"100vh"}>
          {/* <Image src={loginBg} h={"auto"} /> */}
          {/* <FaRegCircleUser size={30} /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default FirstQuestion;
