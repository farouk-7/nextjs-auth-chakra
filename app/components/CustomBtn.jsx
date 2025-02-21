/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";


export const CustomBtn = ({
  childComp,
  bg,
  color,
  text,
  fontWeight,
  borderColor,
  border,
  width,
  height,
  handleClick,
  loading,
  type,
  disabled,
  fontSize,
  p,
  boxShadow,
  ...props
}) => {
  return (
    <Button
      leftIcon={childComp}
      // width="100%"
      color={color || "white"}
      bg={bg || "blue"}
      fontWeight={"none" || fontWeight}
      borderRadius={"7px"}
      p={p}
      boxShadow={boxShadow}
      height={height}
      width={width}
      fontSize={fontSize}
      border={border}
      borderColor={borderColor}
      type={type}
      _hover={{
        bg: bg,
      }}
      onClick={handleClick}
      isLoading={loading}
      isDisabled={disabled}
      {...props}
    >
      {text}
    </Button>
  );
};
