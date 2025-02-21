'use client'

import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import { CustomBtn } from '../components/CustomBtn';
import useForm from '../hooks/useForm';
import Link from 'next/link';
import { login } from './signin';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { _COLORS } from '../constants/colors';

const SignIn = () => {
   const router = useRouter()
    const initialValues = {
        email: "",
        password: "",
      };
    
      const [loading, setLoading] = useState(false);
      const [show, setShow] = useState(false);
      const handleClick = () => setShow(!show);
    
      const { handleChange, formValues } = useForm(initialValues);
      const handleLogin = async () => {
        setLoading(true);
        const payload = { ...formValues };
        await login(payload, setLoading, router);
      };
  return (
    <Flex
    h={"100vh"}
    justify={"space-between"}
    overflow={"hidden"}
    bg={"#000"}
    color={"#fff"}
  >
    <Box flex={1}>
      <Box mt={"30px"} px={"50px"}>
        <Image src={"/logo.png"} alt='' width={100} height={100} />
      </Box>
      <Box px={"50px"} py={"50px"}>
        <Text fontSize={"40px"} fontWeight={"bold"} pb={"20px"}>
          Welcome Back To TeeVill
        </Text>
        <Text fontSize={"24px"} fontWeight={400} maxW={"700px"}>
          Kindly fill out your details and proceed to your dashboard
        </Text>
        <Box mt="50px">
          <Flex align={"center"} gap={"50px"}>
            <FormInput label={"Email Address"} focusBorderColor={_COLORS?.brand} name={"email"} value={formValues?.email} handleChange={handleChange}/>
            <FormInput label={"Password"} focusBorderColor={_COLORS?.brand} type={"password"} name={"password"} value={formValues?.password} handleChange={handleChange} />
          </Flex>
          <Flex justify={"flex-end"} gap={"50px"} mt="20px">
            <Text fontWeight={500} color={_COLORS?.brand}>Forgotten Password ?</Text>
          </Flex>
          <Flex my={"30px"}>
            <CustomBtn text={"Proceed To Dashboard"} width={"full"} bg={_COLORS?.brand} handleClick={handleLogin} loading={loading} />
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
            <CustomBtn text={"Continue with Apple"} width={"full"} bg={"none"} border={"1px solid #fff"}/>
          </Flex>
          <Flex justifyContent={"center"} mt="15px" gap={"10px"}>
            <Text color={"#fff"} fontWeight={600}>
              Don't have an Account ?{" "}
            </Text>
            <Link href={"sign-up"}>
            <Text
              color={_COLORS?.brand}
              cursor={"pointer"}
              fontWeight={600}
            //   onClick={() => {
            //     navigate("/register");
            //   }}
            >
              Register Now
            </Text>
            </Link>
            
          </Flex>
        </Box>
      </Box>
    </Box>

    <Box flex={1} bg={"blue"}>
      {/* <Image src={loginBg} h={"auto"} /> */}
    </Box>
  </Flex>
  )
}

export default SignIn;