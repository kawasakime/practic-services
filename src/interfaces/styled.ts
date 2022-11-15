import { config } from "../configs/config";

export interface ITheme {
  colors: typeof config.colors;
  duration: string;
  fontWeight: {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  media: {
    large: string,
    lessLarge: string,
    medium: string,
    small: string,
  }
}
