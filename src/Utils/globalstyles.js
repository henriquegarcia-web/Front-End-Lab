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

  .teste {
    background-color: ${colors.black};
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 60px;

    input, textarea {
      margin-bottom: 20px;
    }
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

  /* .toolbarClassName {
    border: none;
    padding-bottom: 5px;

    background: ${colors.purple_200};
    border-bottom: 2px solid ${colors.input_hover};
  }
  .wrapperClassName {
    border-radius: 6px;

    background: transparent;
    border: 2px solid ${colors.input_hover};
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