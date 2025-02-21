"use client"

import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resendOTP, sendOtp } from "./verification";
import { _COLORS } from "../constants/colors";
import { useRouter, useSearchParams } from "next/navigation";
import { CustomBtn } from "../components/CustomBtn";
import Image from "next/image";

const VerifyCode = () => {
 
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Access the query params
  const email = searchParams.get("email");
  const data = searchParams.get("state") ? JSON.parse(searchParams.get("state")) : null;

  const queryClient = useQueryClient();
  const [verificationCode, setVerificationCode] = useState(["", "", "", "","",""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !verificationCode[index]) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "Delete" && index < 5 && !verificationCode[index]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const isVerificationCodeComplete = verificationCode.every(
    (code) => code !== ""
  );

  const { mutate: sendEmail, isPending: isUpdateMutating } = useMutation({
    mutationFn: sendOtp,
    mutationKey: ["otp"],
    onSuccess: (data) => {
      router.push("/congratulation");
      console.log("data");
      queryClient.invalidateQueries({ queryKey: ["otp"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async () => {
    const otpCode = verificationCode.join(""); // Join the array to create a single string
    const payload = {
      otp: otpCode, // Send the code as a string
      email: email, // Include the email if required
    };
    sendEmail(payload);
    console.log(payload, "ry/");
  };
  const handleResend = async () => {
    setLoading(true);
    const payload = { email};
    await resendOTP(payload);
  };
  return (
    <Flex
      h={"100vh"}
      justify={"space-between"}
      flexDir={["column","column","column","row"]}
      overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
    >
    
      <Box flex={1}>
         <Box  px={"50px"} mt="20px">
                 <Image src={"/logo.png"} alt="" height={100} width={100} />
          </Box>
        <Box px={"50px"} py={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"}>
            Email Verification
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
           We have sent a verification code to your email. Please enter the code below to confirm your email address and proceed
          </Text>


          <Flex align="center" justify="center" my={20}>
            {verificationCode.map((value, index) => (
              <Input
                key={index}
                focusBorderColor={_COLORS?.brand}
                ref={(el) => (inputRefs.current[index] = el)}
                type="password"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                width="80px"
                height="80px"
                textAlign="center"
                marginX="20px"
                fontWeight="bold"
                color={_COLORS?.brand}
                fontSize="24px"
                border="3px solid #ccc"
              />
            ))}
          </Flex>
          <Flex>
            <CustomBtn text={"Verify Email"} width={"full"} bg={_COLORS?.brand}  loading={isUpdateMutating}  handleClick={handleSubmit}/>
          </Flex>

          <Flex mt="50px" justify={"center"} fontWeight={500} gap={"10px"} fontSize={"20px"}>
            Didn&apos;t receive any code?{" "}
            <Text
              cursor={"pointer"}
              textDecor={"underline"}
              onClick={handleResend}
              color={_COLORS?.brand}
            >
              Resend Code
            </Text>{" "}
          </Flex>


        </Box>
      </Box>

      <Box flex={1} bg={"red"}>
        {/* <Image src={VCimage} w={"full"} h={"100vh"} /> */}
      </Box>
    </Flex>
  );
};

export default VerifyCode;
