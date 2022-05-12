import styled from "styled-components";
import { colors } from "../../Utils/colors";
import fonts from "../../Utils/fonts";

const Logo = styled.h1`
  font-family: 'Tourney', cursive;
  font-size: ${props => props.size ? props.size : '20'}px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 0;

  color: ${props => props.color};
`

export default Logo