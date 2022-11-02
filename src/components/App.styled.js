import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};

  &.active {
    color: ${p => p.theme.colors.orange};
  }
`;

export const Header = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal};
  border-bottom-color: ${p => p.theme.colors.text};

  > nav {
    display: flex;
    gap: ${p => p.theme.space[4]}px;
  }
`;
