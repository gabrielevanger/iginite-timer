import 'styled-components';
import { defaultTheme } from '../components/styles/themes/default'; 

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export type DefaultTheme = ThemeType
}