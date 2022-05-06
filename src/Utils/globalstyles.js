import styled, { createGlobalStyle } from "styled-components";
import { ThemeFrontEndCode } from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
    flex-shrink: 0;
  }

  // ------ SCROLL BAR

  /* width */
  /* ::-webkit-scrollbar {
    width: 5px;
    z-index: 1000;
    background: rgba(1, 194, 154, 0.1);
  } */

  /* Track */
  /* ::-webkit-scrollbar-track {
    border-radius: 6px;
  } */

  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background: ${ThemeFrontEndCode.input_hover};
    border-radius: 10px;
  } */

  /* .toolbarClassName {
    border: none;
    padding-bottom: 5px;

    background: ${ThemeFrontEndCode.purple_200};
    border-bottom: 2px solid ${ThemeFrontEndCode.input_hover};
  }
  .wrapperClassName {
    border-radius: 6px;

    background: transparent;
    border: 2px solid ${ThemeFrontEndCode.input_hover};
  }
  .editorClassName {
    padding: 0 15px;
    height: 800px;
    overflow: hidden;

    color: rgba(255, 255, 255, 1);
  } */
`

export default GlobalStyle

// export const View = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `

// export const ViewWrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   height: 100%;
//   padding: 25px;
//   border-radius: 6px;

//   border: 1px solid ${ThemeFrontEndCode.white_100};
// `

// export const ViewHeader = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 80px;
//   margin-bottom: 20px;
//   padding: 0 25px;
//   border-radius: 6px;

//   border: 1px solid ${ThemeFrontEndCode.white_200};

//   input {
//     margin-right: 25px;

//     &:last-of-type {
//       margin-left: 0;
//     }
//   }
// `