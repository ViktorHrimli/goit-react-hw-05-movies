import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, LinksRouterBack } from 'CommonStyle/Common.styled';
import { Input, MoviesItemCard, MoviesRenderList } from './Movies.styled';
import { ApiServiceSerchMovie } from '../Api/ServiceApi';

const IMG = 'https://dummyimage.com/400x600/000/0011ff&text=Not+find+photo';

export default function Movies() {
  const [serchMovies, setserchMovies] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();
  const useQueryUrlParams = serchParams.get('query') ?? '';
  const [query, setQuery] = useState(() => {
    return useQueryUrlParams;
  });

  const handleSubmit = ({ serchQuery }, { resetForm }) => {
    if (serchQuery === '') {
      return toast.error('Required field', {
        theme: 'dark',
      });
    }
    setSerchParams(
      serchQuery !== '' ? { query: serchQuery.trim().toLowerCase() } : {}
    );
    setQuery(serchQuery.trim().toLowerCase());
    resetForm();
  };

  useEffect(() => {
    if (query.length === 0) return;
    ApiServiceSerchMovie(query).then(({ data: { results } }) => {
      setserchMovies(results);
    });
  }, [query]);
  const location = useLocation();
  const backLinkHref = location.state?.from;
  return (
    <>
      <Box mr="auto" display="flex" gridGap="20px">
        <LinksRouterBack to={backLinkHref}>Back</LinksRouterBack>
        <LinksRouterBack to="/">Home</LinksRouterBack>
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
        <Formik
          initialValues={{ serchQuery: useQueryUrlParams }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input type="text" name="serchQuery" />
          </Form>
        </Formik>
        <Box>
          <MoviesRenderList>
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
