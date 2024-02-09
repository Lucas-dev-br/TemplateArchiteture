import { Dimensions, PixelRatio, Platform } from "react-native";

const { width } = Dimensions.get("window");

// Pode importar a altura
const adjustedHeight = (height): number => height * PixelRatio.get();

const theme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
  },
  fonts: {
    regular: "OpenSansRegular",
    bold: "OpenSansBold",
  },
  sizes: {
    xs: `${Platform.OS === "ios" ? "11px" : "9px"}`,
    ms: `${Platform.OS === "ios" ? "12px" : "10px"}`,
  },
  metrics: {
    baseInputHeight: adjustedHeight(40),
    baseButtonHeight: adjustedHeight(40),
  },
};

export { theme };
