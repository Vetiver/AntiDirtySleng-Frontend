'use client'
import React, { FC, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EyeOff, Eye } from "@/icons";

interface PasswordInputProps {
  placeholder: string;
  name: string;
  onChange: any;
  onBlur: any;
  value: any;
}

const PasswordInput: FC<PasswordInputProps> = ({ placeholder, name, onChange, onBlur, value }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleMouseDownPassword = () => {
    setPasswordVisibility(true);
  };

  const handleMouseUpPassword = () => {
    setPasswordVisibility(false);
  };

  return (
    <InputGroup>
      <Input
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        fontFamily={"Romanivske"}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
      />
      <InputRightElement cursor={"pointer"} width="3rem">
        {isPasswordVisible ? (
          <EyeOff onMouseUp={handleMouseUpPassword} />
        ) : (
          <Eye
            onClick={handleTogglePassword}
            onMouseDown={handleMouseDownPassword}
          />
        )}
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
