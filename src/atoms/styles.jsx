import styled, { css } from "styled-components";

//

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const ButtonStyles = css`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid white;
  ${({ primary }) => primary && `color:blue`}
  ${({ secondary }) =>
    secondary && `color:orange`}
`;

export const mediaContainerStyles = css`
  width: 200px;
  height: 300px;
  background: orange;
`;
