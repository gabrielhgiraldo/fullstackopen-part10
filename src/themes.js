import { Platform } from 'react-native';

const colorPrimary = "#0366d6";

const theme = {
  colors: {
    primary: colorPrimary,
    appBar: "#2F90BF",
    error: "#d73a4a"
  },
  text: {
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  meta: {
    color: "gray",
    fontWeight: "normal",
  },
  button: {
    backgroundColor: colorPrimary,
    textAlign: "center",
    borderRadius: 5,
    padding: 20
}
};

export default theme;