import { Routes, Route } from 'react-router-dom';
import { useReducer, useState, lazy, Suspense } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { NotFound } from './Pages/NotFound';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
  const [movieDatails, setMovieDateils] = useState(null);
  const [{ page, id }, dispatch] = useReducer(CastReviewReducer, {
    page: '',
    id: null,
  });

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
              path="/Movies"
              element={<Movies onClick={handleClickIdMovies} />}
            />
            <Route
              path="Movies/:id"
              element={
                <MovieDetails idMovie={movieDatails} dispatch={dispatch} />
              }
            >
              <Route path="cast" element={<Cast page={page} id={id} />} />
              <Route path="reviews" element={<Reviews page={page} id={id} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Suspense>
    </>
  );
};
