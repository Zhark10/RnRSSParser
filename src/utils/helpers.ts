import { Toast } from "native-base";
const DomParser = require('dom-parser');

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

export const textToUrl = (text: string) => ("https://" + text.replace("http://", "").replace("https://", ""));

export const getImageFromDescription = (description: string) => {
  let parser = new DomParser();
  let dom = parser.parseFromString(description);
  try {
    if (dom.getElementsByTagName("img")) {
      return dom.getElementsByTagName("img")[0].getAttribute("src")
    }
  } catch (error) {
    return;
  }
}