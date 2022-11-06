import { createGlobalStyle } from 'styled-components';
import {COLORS,FONTS} from './constants'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
 scroll-behavior:smooth;
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6{
  margin:0;
  padding:0;

 }
  body{
    min-height:0;
    height:100%;
    background:${COLORS.BACKGROUND.WHITE};
    color:${COLORS.BLACK};
    font-family:${FONTS.FAMILIES.RALEWAY} 'Sans-Serif';
   }
`;
 
export default GlobalStyle;