import { createGlobalStyle } from 'styled-components';
import {COLORS,FONTS} from './constants'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
 scroll-behavior:smooth;
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