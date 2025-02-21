"use client";

import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomBtn } from "../components/CustomBtn";
import FormInput from "../components/FormInput";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useForm from "../hooks/useForm";
import Link from "next/link";
import { signUpUser } from "./signout";
import { useRouter } from "next/navigation";
import { _COLORS } from "../constants/colors";
import Image from "next/image";


const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };
  const { handleChange, formValues } = useForm(initialValues);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [show1, setShow1] = useState(false);
  const handleClick1 = () => setShow1(!show1);


  const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true);
      const payload = { ...formValues };
      await signUpUser(payload, setLoading, router);
  };
  
  return (
    <Flex
      h={"100vh"}
      justify={"space-between"}
      overflow={"hidden"}
      bg={"black"}
      color={"#fff"}
    >
      <Box flex={1} mt={"30px"}>
        <Box px={"50px"}>
        <Image
        src="/logo.png"
        height={100} 
        alt=""
        width={100}
      />
        </Box>
        <Box px={"50px"} py={"30px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"10px"}>
            Welcome To TeeVill
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
            Kindly fill out your details and proceed to the next step. Your
            journey starts here
          </Text>
          <Box mt="20px">
            <Flex align={"center"} gap={"50px"}>
              <FormInput label={"First Name"} focusBorderColor={_COLORS?.brand} name="firstName" handleChange={handleChange} value={formValues?.firstName}/>
              <FormInput label={"Last Name"} focusBorderColor={_COLORS?.brand}  name="lastName" handleChange={handleChange} value={formValues?.lastName}/>
            </Flex>
            <Flex align={"center"} gap={"50px"} mt="20px">
              <FormInput label={"Email"} name="email" focusBorderColor={_COLORS?.brand}  handleChange={handleChange} value={formValues?.email}/>
              <FormInput label={"Phone Number"} name="phone" focusBorderColor={_COLORS?.brand}  handleChange={handleChange} value={formValues?.phone}/>
            </Flex>
            <Flex align={"center"} gap={"50px"} mt="20px">
              <Box flex={1}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    focusBorderColor={_COLORS?.brand}
                    placeholder="enter password"
                    type={show ? "text" : "password"}
                    value={formValues?.password}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <Button bg={"none"} size={"40px"} onClick={handleClick}>
                      {show ? (
                        <IoIosEyeOff color={"#666666"} size={20} />
                      ) : (
                        <IoIosEye color={"#666666"} size={20} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              {/* <Box flex={1}>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    focusBorderColor="#65129A"
                    name="confirmPassword"
                    placeholder="confirm password"
                    type={show1 ? "text" : "password"}
                    value={formValues?.confirmPassword}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <Button bg={"none"} size={"40px"} onClick={handleClick1}>
                      {show1 ? (
                        <IoIosEyeOff color={"#666666"} size={20} />
                      ) : (
                        <IoIosEye color={"#666666"} size={20} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box> */}
            </Flex>
          </Box>
          <Flex mt={"30px"}>
            <CustomBtn text={"Register Now"} width={"full"}  handleClick={handleRegister} loading={loading} bg={_COLORS?.brand}/>
          </Flex>
          <Flex my="20px" align={"center"} gap={"30px"}>
            <Box h={"2px"} bg={"white"} w={"full"}></Box>
            <Box>
              <Text fontWeight={500}>Or</Text>
            </Box>
            <Box h={"2px"} bg={"white"} w={"full"}></Box>
          </Flex>
          <Flex align={"center"} gap={"50px"}>
            <CustomBtn text={"Continue with Google"} width={"full"} bg={"none"} border={"1px solid #fff"} />
            <CustomBtn text={"Continue with Apple"} width={"full"}  bg={"none"} border={"1px solid #fff"}/>
          </Flex>
          <Flex justifyContent={"center"} mt="15px" gap={"10px"}>
            <Text color={"#fff"} fontWeight={600}>
              Already have an Account ?{" "}
            </Text>
            <Link href="sign-in">
            <Text
              color={_COLORS?.brand}
              cursor={"pointer"}
              fontWeight={600}
              // onClick={() => {
              //   navigate("/login");
              // }}
            >
              Sign In
            </Text>
            </Link>
           
          </Flex>
        </Box>
      </Box>

      <Box flex={1} bg={"green"}>
        {/* <Image src={loginBg} h={"auto"} /> */}
      </Box>
    </Flex>
  );
};

export default SignUp;
