import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Box, LinksRouterBack } from 'CommonStyle/Common.styled';
import { MoviesItemCard, MoviesRenderList } from './Movies.styled';
import { ApiServiceSerchMovie } from '../Api/ServiceApi';
import SerchForm from 'components/Form/Form';

const IMG = 'https://dummyimage.com/400x600/000/0011ff&text=Not+find+photo';

export default function Movies() {
  const [serchMovies, setserchMovies] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();
  const useQueryUrlParams = serchParams.get('query') ?? '';
  const [query, setQuery] = useState(() => {
    return useQueryUrlParams;
  });

  const { error } = useQuery(
    ['get querys', query],
    () => ApiServiceSerchMovie(query),
    {
      onSuccess: response => {
        setserchMovies(response?.data?.results);
      },
    }
  );

  const handleSubmit = query => {
    setSerchParams(query !== '' ? { query: query } : {});
    setQuery(query);
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <Box mr="auto" display="flex" gridGap="20px">
        <LinksRouterBack to={backLinkHref}>Back</LinksRouterBack>
      </Box>
      <Box
        as="main"
        color="black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap="20px"
      >
        <h1>Movies</h1>
        <SerchForm submit={handleSubmit} />
        <Box>
          <MoviesRenderList>
            {error &&
              toast.error(error.message, {
                theme: 'dark',
              })}

            {serchMovies &&
              serchMovies.map(({ id, original_title, poster_path }) => (
                <MoviesItemCard key={id}>
                  <Link to={`${id}`} state={{ form: location }}>
                    <img
                      src={
                        !poster_path
                          ? IMG
                          : `https://image.tmdb.org/t/p/w400${poster_path}`
                      }
                      alt={original_title}
                    />
                    <p>{original_title}</p>
                  </Link>
                </MoviesItemCard>
              ))}
          </MoviesRenderList>

          <ToastContainer />
        </Box>
      </Box>
    </>
  );
}
