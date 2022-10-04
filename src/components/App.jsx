import { Routes, Route } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { NotFound } from './Pages/NotFound';
import { MovieDetails } from './Pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import {
  ApiServiseTrand,
  ApiServiseMovieDetails,
  ApiServiseCastMovie,
  ApiServiceSerchMovie,
} from './Api/ServiceApi';

function CastReviewReducer(state, action) {
  switch (action.type) {
    case 'credits':
      return { page: action.type, id: action.payload };
    case 'reviews':
      return { page: action.type, id: action.payload };
    default:
      return state;
  }
}

export const App = () => {
  const [movie, setMovie] = useState([]);
  const [movieDatails, setMovieDateils] = useState(null);
  const [query, setQuery] = useState(null);
  const [serchMovie, setSerchMovie] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [castRewie, setCastRewie] = useState([]);
  const [{ page, id }, dispatch] = useReducer(CastReviewReducer, {
    page: '',
    id: null,
  });

  // fetch
  useEffect(() => {
    ApiServiseTrand().then(({ data: { results } }) => {
      setMovie(results);
    });

    return () => {
      setMovie([]);
    };
  }, []);

  useEffect(() => {
    if (!movieDatails) return;
    ApiServiseMovieDetails(movieDatails).then(({ data }) => {
      setDataMovie(data);
    });
    return () => {};
  }, [movieDatails]);

  useEffect(() => {
    if (!id) return;
    ApiServiseCastMovie(page, id).then(({ data }) => {
      setCastRewie(data);
    });
  }, [id, page]);

  useEffect(() => {
    if (!query) return;
    ApiServiceSerchMovie(query).then(({ data: results }) => {
      setSerchMovie(results);
    });
  }, [query]);
  const handleClickIdMovies = e => {
    setMovieDateils(e);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={5}
      px={5}
      gridGap={4}
    >
      <Routes>
        <Route
          path="/"
          element={<Home movie={movie} onClick={handleClickIdMovies} />}
        />
        <Route
          path="/Movies"
          element={
            <Movies
              onClick={handleClickIdMovies}
              query={setQuery}
              movie={serchMovie}
            />
          }
        />
        <Route
          path="Movies/:id"
          element={
            <MovieDetails
              dispatch={dispatch}
              onClick={handleClickIdMovies}
              movie={dataMovie}
            />
          }
        >
          <Route path="cast" element={<Cast castData={castRewie} />} />
          <Route path="reviews" element={<Reviews reviewsData={castRewie} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
