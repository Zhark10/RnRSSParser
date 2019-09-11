import { Toast } from "native-base";

export const showMessage = (text: string) => (
    Toast.show({
      text,
      duration: 5000,
      style: { backgroundColor: "#fff" },
      textStyle: { color: "#000" },
      buttonTextStyle: { color: "#000" },
      buttonText: "ОК"
    })
  )