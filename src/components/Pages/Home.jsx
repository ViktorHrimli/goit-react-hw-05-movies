import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box, LinksRouter } from 'CommonStyle/Common.styled';
import { ListLinkStyled } from 'App.styled';
import { ApiServiseTrand } from '../Api/ServiceApi';
import Gallery from 'components/Gallery/Gallery';

export default function Home() {
  const [movies, setmovies] = useState([]);

  const { error, isLoading } = useQuery('get Trend', () => ApiServiseTrand(), {
    onSuccess: async ({ data }) => {
      setTimeout(() => {
        setmovies(data.results);
      }, 500);
    },
    onError: async error => {
      alert(error.message);
    },
  });

  if (error) return error.message;

  return (
    <Box as="main" display="flex" flexDirection="column" gridGap="20px">
      <Box ml="auto">
        <ListLinkStyled>
          <LinksRouter to="/">Home</LinksRouter>
          <LinksRouter to="/movies">Movies</LinksRouter>
        </ListLinkStyled>
      </Box>
      <Box>
        {isLoading ? (
          <h1 style={{ color: 'black' }}>Loading...</h1>
        ) : (
          <Gallery movies={movies} />
        )}
      </Box>
    </Box>
  );
}
