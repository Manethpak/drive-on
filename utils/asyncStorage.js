import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("setItem: " + key + " " + value);
  } catch (e) {
    console.log(e);
  }
}

export async function getItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
}

export async function setObject(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue).then(() =>
      console.log("setObject: " + key + " " + jsonValue)
    );
  } catch (e) {
    console.log(e);
  }
}

export async function getObject(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}
