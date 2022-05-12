import styled from "styled-components";
import { colors } from "../../Utils/colors";
import fonts from "../../Utils/fonts";

// ----------------------------------- TÍTULO

export const Title = styled.h2`
  font: ${props => props.bold ? fonts.title_bold : fonts.title};

  color: ${colors.white};
`

// ----------------------------------- SUBTÍTULO

export const Subtitle = styled.h3`
  font: ${props => props.bold ? fonts.subtitle_bold : fonts.subtitle};

  color: ${colors.white};
`

// ----------------------------------- PARÁGRAFO

export const Paragraph = styled.h4`
  font: ${props => props.bold ? fonts.commum_bold : fonts.commum};

  color: ${colors.white};
`

// ----------------------------------- LEGENDA

export const Legend = styled.h5`
  font: ${props => props.bold ? fonts.mini_bold : fonts.mini};

  color: ${colors.white};
`