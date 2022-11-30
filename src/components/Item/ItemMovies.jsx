import { ListMoviesDetails, ItemMovies } from '../Pages/MovieDetails.styled';
import { Box, LinksRouter } from 'CommonStyle/Common.styled';
import { useLocation, useParams } from 'react-router-dom';

const IMG = 'https://dummyimage.com/300x450/000/0011ff&text=Not+find+photo';

const Moives = ({ dataMovie }) => {
  const getIdParams = useParams('id');
  const location = useLocation();

  const {
    original_title,
    original_language,
    poster_path,
    release_date,
    overview,
    homepage,
  } = dataMovie;
  return (
    <>
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
    </>
  );
};

export default Moives;
