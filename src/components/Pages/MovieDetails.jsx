import PropTypes from 'prop-types';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ApiServiseMovieDetails } from '../Api/ServiceApi';
import { Box, LinksRouter, LinksRouterBack } from 'CommonStyle/Common.styled';
import { ListMoviesDetails, ItemMovies } from './MovieDetails.styled';

const IMG = 'https://dummyimage.com/300x450/000/0011ff&text=Not+find+photo';

export default function MovieDetails({ idMovie }) {
  const [dataMovie, setDataMovie] = useState([]);

  const getIdParams = useParams('id');
  useEffect(() => {
    if (!getIdParams.id) return;
    ApiServiseMovieDetails(getIdParams.id).then(({ data }) => {
      setDataMovie(data);
    });
    return () => {};
  }, [getIdParams]);

  const {
    original_title,
    original_language,
    poster_path,
    release_date,
    overview,
    homepage,
  } = dataMovie;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <Box mr="auto" display="flex" gridGap="20px">
        <LinksRouterBack to={backLinkHref}>Back</LinksRouterBack>
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
              src={
                !poster_path
                  ? IMG
                  : `https://image.tmdb.org/t/p/w300${poster_path}`
              }
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
                  to="cast"
                  state={{ from: location, id: getIdParams }}
                >
                  Cast
                </LinksRouter>
                <LinksRouter
                  to="reviews"
                  state={{ from: location, id: getIdParams }}
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
}

MovieDetails.propTypes = {
  idMovie: PropTypes.number.isRequired,
};
