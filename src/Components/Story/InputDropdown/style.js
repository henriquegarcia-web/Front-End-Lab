import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import fonts from "../../../Utils/fonts";

export const Dropdown = styled.div`
  z-index: 10;
  position: relative;
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: fit-content;
  padding: 6px 12px;
  border-radius: 6px;
  transition: .1s;
  cursor: pointer;

  font: ${fonts.input_text};
  background: transparent;
  border: 1px solid ${props => props.active ? colors.input_active : colors.input};

  &:focus {
    border: 1px solid ${colors.input_active};
  }

  &:hover {
    border: 1px solid ${props => props.active ? colors.input_active : colors.input_hover};
  }
`

export const DropdownMain = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DropdownLabel = styled.div`
  margin-right: 40px;
  user-select: none;

  color: ${colors.input_label};
`

export const DropdownActiveValue = styled.div`
  user-select: none;

  color: ${props => props.active ? colors.input_active : colors.white};
`

export const DropdownModal = styled.div`
  z-index: 10;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  transition: .1s;  

  background: ${colors.black};
  border: 1px solid ${colors.input};
`

export const DropdownItem = styled.div`
  padding: 6px 12px;
  border-radius: 6px;
  transition: .1s;
  cursor: pointer;
  margin-bottom: 10px;

  color: ${colors.input_label};
  border: 1px solid ${colors.input};

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${colors.input_hover};
    color: ${colors.input_hover};
  }
`

// export const DropdownItemActive = styled(DropdownItem)`
//   border: 1px solid ${colors.input_active};
//   color: ${colors.input_active};
// `