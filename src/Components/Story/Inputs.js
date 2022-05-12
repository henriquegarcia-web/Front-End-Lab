import styled from "styled-components";
import { colors } from "../../Utils/colors";
import fonts from "../../Utils/fonts";

// -------------------------------------------------------------------------------

// ----------------------------------- INPUT DE TEXTO

export const InputText = styled.input`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: fit-content;
  padding: 6px 12px;
  border-radius: 6px;
  transition: .1s;

  font: ${fonts.input_text};
  color: ${colors.white};
  background: transparent;
  border: 1px solid ${colors.input};

  &:focus {
    border: 1px solid ${colors.input_active};
  }

  &:hover {
    border: 1px solid ${colors.input_hover};
  }
`

// ----------------------------------- INPUT PASSWORD

export const InputPassword = styled(InputText)``

// -------------------------------------------------------------------------------

// ----------------------------------- INPUT DE IMAGEM

export const InputImage = styled.input`
  
`

// ----------------------------------- INPUT TEXTAREA

export const InputTextarea = styled.textarea`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: ${props => props.height ? `${props.height}px` : '100px'};
  resize: none;
  border-radius: 6px;
  padding: 8px 12px;

  font: ${fonts.input_text};
  color: ${colors.white};
  background: transparent;
  border: 1px solid ${colors.input};

  &:focus {
    border: 1px solid ${colors.input_active};
  }

  &:hover {
    border: 1px solid ${colors.input_hover};
  }
`

// ----------------------------------- INPUT BUTTON

export const InputButton = styled.input`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: fit-content;
  transition: .1s;
  border-radius: 6px;
  padding: 6px 16px;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  
  background-color: transparent;
  font: ${fonts.input};
  color: ${props => props.isActive ? colors.input_active : colors.input_button};
  border: 1px solid ${props => props.isActive ? colors.input_active : colors.input_button};
  background-image: ${props => props.isActive ? colors.degrade_primary : 'transparent'};

  &:hover {
    border: 1px solid ${colors.input_hover};
    color: ${colors.input_hover};
    background-image: ${colors.degrade_primary};
  }

  &:active {
    border: 1px solid ${colors.input_active};
    color: ${colors.input_active};
  }
`

// -------------------------------------------------------------------------------