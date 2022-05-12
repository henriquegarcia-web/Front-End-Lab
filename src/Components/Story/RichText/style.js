import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import fonts from "../../../Utils/fonts";

export const RichText = styled.div`
  .wrapperClassName {
    border-radius: 6px;
    transition: .1s;

    background: transparent;
    border: 1px solid ${colors.input};

    &:hover {
      border: 1px solid ${colors.input_hover};

      .toolbarClassName {
        border-bottom: 1px solid ${colors.input_hover};
      }
    }
  }

  .toolbarClassName {
    border: none;
    padding: 5px 5px 10px 5px;
    transition: .1s;

    background: ${colors.degrade_primary};
    border-bottom: 1px solid ${colors.input};

    .rdw-dropdown-wrapper {
      height: 20px;
      background: rgba(255, 255, 255, 0.9);
    }

    .rdw-option-wrapper {
      transition: .1s;
      background: rgba(255, 255, 255, 0.6);

      &:hover {
        background: ${colors.white};
      }
    }
  }

  .editorClassName {
    padding: 0 12px;
    height: ${props => props.height ? props.height : '100'}px;
    /* overflow: hidden; */
    font: ${fonts.input_text};

    color: ${colors.white};
  }
`