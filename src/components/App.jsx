import { Routes, Route } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { NotFound } from './Pages/NotFound';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [movieDatails, setMovieDateils] = useState('');

  const handleClickIdMovies = e => {
    setMovieDateils(e);
  };

  return (
    <>
      <Suspense>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py={5}
          px={5}
          gridGap={4}
        >
          <Routes>
            <Route path="/" element={<Home onClick={handleClickIdMovies} />} />
            <Route
              path="/movies"
              element={<Movies onClick={handleClickIdMovies} />}
            />
            <Route
              path="movies/:id"
              element={<MovieDetails idMovie={movieDatails} />}
            >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Suspense>
    </>
  );
};
