import { config } from "../configs/config";
import { ITheme } from "../interfaces/styled";

const baseTheme: ITheme = {
  colors: config.colors,
  duration: ".2s",
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  media: {
    large: "(max-width: 1200px)",
    lessLarge: "(max-width: 1000px)",
    medium: "(max-width: 680px)",
    small: "(max-width: 580px)",
  },
};

export default baseTheme;
