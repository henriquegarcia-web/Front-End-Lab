import styled from "styled-components";
import { ThemeFrontEndCode } from "./colors";
import fonts from "./fonts";

// ----------------------------------- INPUTS

export const InputText = styled.input`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: fit-content;
  padding: 8px 15px;

  font: ${fonts.input};
  color: ${ThemeFrontEndCode.white};
  background: transparent;
  border-bottom: 1px solid ${ThemeFrontEndCode.input_hover};
`

export const InputTextarea = styled.textarea`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: ${props => props.height ? `${props.height}px` : '100px'};
  resize: none;
  border-radius: 6px;
  padding: 8px 15px;

  font: ${fonts.input};
  color: ${ThemeFrontEndCode.white};
  background: transparent;
  border: 1px solid ${ThemeFrontEndCode.input_hover};
`

export const InputSubmit = styled.input`
  width: ${props => props.width === 'auto' ? 'fit-content' : '100%'};
  height: fit-content;
  transition: .2s;
  border-radius: 6px;
  padding: 6px 15px;
  letter-spacing: 1px;
  
  font: ${fonts.input};
  border: 1px solid ${ThemeFrontEndCode.purple};
  color: ${props => props.isActive ? ThemeFrontEndCode.white : ThemeFrontEndCode.purple};
  background-color: ${props => props.isActive ? ThemeFrontEndCode.input_active : ThemeFrontEndCode.input};

  &:hover {
    background-color: ${ThemeFrontEndCode.input_hover};
    color: ${ThemeFrontEndCode.white};
  }
`

export const InputPassword = styled(InputText)`
  
`