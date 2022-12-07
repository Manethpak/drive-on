import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";

const Input = (props) => {
  const { label, ...rest } = props;
  const [secure, setSecure] = useState(props.secureTextEntry || false);

  return (
    <View>
      {label && (
        <Text className="my-2 text-gray-500 text-md font-semibold">
          {label}
        </Text>
      )}
      <View>
        <TextInput
          {...rest}
          style={styles.input}
          secureTextEntry={secure}
          selectionColor={"#3b82f6"}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={styles.action}
          >
            {secure ? (
              <EyeIcon color="gray" size={20} />
            ) : (
              <EyeSlashIcon color="gray" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#3b82f6",
    paddingHorizontal: 20,
  },
  action: {
    position: "absolute",
    top: 14,
    right: 12,
  },
});
