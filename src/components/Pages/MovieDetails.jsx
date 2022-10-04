import { Outlet } from 'react-router-dom';
import { Box, LinksRouter, LinksRouterBack } from 'CommonStyle/Common.styled';
import { ListMoviesDetails, ItemMovies } from './MovieDetails.styled';
const urlPage =
  'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png';
export const MovieDetails = ({
  movie: {
    original_title,
    original_language,
    poster_path,
    release_date,
    overview,
    homepage,
    id,
  },
  dispatch,
}) => {
  return (
    <>
      <Box mr="auto" display="flex" gridGap="20px">
        <LinksRouterBack to="/Movies">Back</LinksRouterBack>
        <LinksRouterBack to="/">Home</LinksRouterBack>
      </Box>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={20}
      >
        <Box px={100} py={0} display="flex" alignItems="center" gridGap={20}>
          <Box color="black">
            <h2>{original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}` || urlPage}
              alt={original_title}
            />
          </Box>
          <ListMoviesDetails>
            <ItemMovies>
              <p>Language: {original_language}</p>
            </ItemMovies>
            <ItemMovies>
              <p>Ralease: {release_date}</p>
            </ItemMovies>
            <ItemMovies>
              <p>Homepage: {homepage}</p>
            </ItemMovies>
            <ItemMovies>
              <p>Overview: {overview}</p>
            </ItemMovies>
            <ItemMovies>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gridGap={20}
              >
                <LinksRouter
                  onClick={() => dispatch({ type: 'credits', payload: id })}
                  to="cast"
                >
                  Cast
                </LinksRouter>
                <LinksRouter
                  onClick={() => dispatch({ type: 'reviews', payload: id })}
                  to="reviews"
                >
                  Reviews
                </LinksRouter>
              </Box>
            </ItemMovies>
          </ListMoviesDetails>
        </Box>

        <Outlet />
      </Box>
    </>
  );
};
