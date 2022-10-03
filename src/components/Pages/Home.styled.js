import styled from 'styled-components';

export const HomeRenderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const HomeItemCard = styled.li`
  :hover {
    scale: 1.05;
  }
`;
