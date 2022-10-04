import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  position: relative;
  width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]}px;
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
  }
`;

export const MoviesRenderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const MoviesItemCard = styled.li`
  :hover {
    scale: 1.05;
  }
`;
