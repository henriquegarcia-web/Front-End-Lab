import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

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

  body {
    background-color: ${colors.black};
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.08);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.green};
    border-radius: 10px;
  }
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

//   border: 1px solid ${colors.white_100};
// `

// export const ViewHeader = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 80px;
//   margin-bottom: 20px;
//   padding: 0 25px;
//   border-radius: 6px;

//   border: 1px solid ${colors.white_200};

//   input {
//     margin-right: 25px;

//     &:last-of-type {
//       margin-left: 0;
//     }
//   }
// `