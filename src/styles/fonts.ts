import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "FKScreamerS3";
        font-weight: 1 1000;
        src: url("https://futureproof-protected-assets.s3.eu-west-2.amazonaws.com/brand-assets/fonts/FKScreamerLegacy-Upright.ttf");
    }
    @font-face {
        font-family: "WorkSansS3";
        font-weight: 1 1000;
        src: url("https://futureproof-protected-assets.s3.eu-west-2.amazonaws.com/brand-assets/fonts/WorkSans-VariableFont_wght.ttf");
    }

    @font-face {
        font-family: "WorkSansItalicS3";
        font-weight: 1 1000;
        src: url("https://futureproof-protected-assets.s3.eu-west-2.amazonaws.com/brand-assets/fonts/WorkSans-Italic-VariableFont_wght.ttf");
    }
`

// export const FontStyles = createGlobalStyle`
//     @font-face {
//         font-family: 'FK Screamer';
//         src: url(${FKScreamerOTF}) format('otf'),
//              url(${FKScreamerTTF}) format('ttf'),
//              url(${FKScreamerWOFF}) format('woff'),
//              url(${FKScreamerWOFF2}) format('woff2');
//     }

//     @font-face {
//         font-family: 'Work Sans';
//         src: url(${WorkSansTTF}) format('ttf');
//     }

//     @font-face {
//         font-family: 'Work Sans Italic';
//         src: url(${WorkSansItalicTTF}) format('ttf');
//     }
// `;