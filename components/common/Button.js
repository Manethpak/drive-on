import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ children, onPress, variant = "default" }) => {
  const variantMap = {
    default: "bg-blue-500",
    "default-text": "text-white",

    outline: "border-2 border-blue-500",
    "outline-text": "text-blue-500",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={
        "h-12 rounded-xl justify-center items-center " + variantMap[variant]
      }
    >
      <Text className={"font-bold text-lg " + variantMap[variant + "-text"]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
