import { Outlet } from 'react-router-dom';

import { StyledLink, Header } from './App.styled';
import { Box } from 'constans';

export const SharedLayout = () => {
  return (
    <Box maxWidth={960} mr={'auto'} ml={'auto'} pr={4} pl={4}>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Box>
  );
};
