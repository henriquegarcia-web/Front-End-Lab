import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import fonts from "../../../Utils/fonts";

export const Tags = styled.div`
  margin-bottom: 20px;

  display: flex;
  height: fit-content;
  padding: 12px;
  border-radius: 6px;
  
  background: transparent;
  border: 1px solid ${colors.input};

  &:hover {
    border: 1px solid ${colors.input_hover};
  }

  .ReactTags__tags {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;

    .ReactTags__selected {
      display: flex;
      flex-wrap: wrap;
      height: fit-content;
      width: 100%;

      .ReactTags__tag {
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 3px 10px 4px 10px;
        margin: 0 10px 10px 0;
        cursor: default !important;
  
        font: ${fonts.input_text};
        color: ${colors.white};
        border: 1px solid ${colors.input};

        &:hover {
          border: 1px solid ${colors.input_hover};
        }
      
        button {
          margin-left: 10px;
          font-size: 18px;
          cursor: pointer !important;
  
          background-color: transparent;
          color: ${colors.white};
        }
      }
    }
  
    .ReactTags__tagInput {
      height: fit-content;
      
      .ReactTags__tagInputField {
        margin: 0;
        padding: 8px 15px;

        font: ${fonts.input_text};
        color: ${colors.white};
        background: transparent;
        border-bottom: 1px solid ${colors.input};

        &:focus {
          border-bottom: 1px solid ${colors.input_active};
        }

        &:hover {
          border-bottom: 1px solid ${colors.input_hover};
        }
      }
    }
  }
`