import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.text};
  text-decoration: none;
`;

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledNav = styled.ul`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
`;
