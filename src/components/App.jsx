import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { NotFound } from './Pages/NotFound';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />}>
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
