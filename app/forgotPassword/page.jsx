"use client"


import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

import FormInput from "../components/FormInput";
import { CustomBtn } from "../components/CustomBtn";
import useForm from "../hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgotPassword} from "./forgotPassword";
import { _COLORS } from "../constants/colors";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter
  const queryClient = useQueryClient();
  const initialValues = {
    email: "",
    // passowrd: "",
    // confirmPassword: "",
  };
  const { handleChange, formValues } = useForm(initialValues);

  const { mutate: sendReset, isPending: isUpdateMutating } = useMutation({
    mutationFn: forgotPassword,
    mutationKey: ["password"],
    onSuccess: (data) => {
      router.push("/login");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["password"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async () => {
    const payload = {
      ...formValues,
    };
    sendReset(payload);
    console.log(payload, "ry/");
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
        <Box px={"50px"} mt="20px">
          <Image src={"/logo.png"} alt="" height={100} width={100} />
        </Box>
        <Box px={"50px"} py={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"}>
            Forgotten Password
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
            Kindly provide the email relating with this account, a dummy
            password would be sent to that email. Use the password in log in
          </Text>
          <Box mt="50px">
            <Flex align={"center"} gap={"50px"}>
              <Box flex={1}>
                <FormInput
                  label={"Email Address"}
                  focusBorderColor={_COLORS?.brand}
                  value={formValues?.email}
                  handleChange={handleChange}
                  name={"email"}
                />
              </Box>
            </Flex>
           
            <Flex mt={"70px"}>
              <CustomBtn
               bg={_COLORS?.brand}
                text={"Proceed"}
                width={"full"}
                handleClick={handleSubmit}
                loading={isUpdateMutating}
              />
            </Flex>
          
          </Box>
        </Box>
      </Box>

      <Box flex={1} bg={"yellow"} h={"100vh"}>
        {/* <Image src={vase} w={"full"} h={"100vh"} /> */}
      </Box>
    </Flex>
  );
};

export default ResetPassword;
