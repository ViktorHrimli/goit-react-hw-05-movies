import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Box, LinksRouter } from 'CommonStyle/Common.styled';
import { Input, MoviesItemCard, MoviesRenderList } from './Movies.styled';

export const Movies = ({ query, movie: { results }, onClick }) => {
  const handleSubmit = ({ serchQuery }, { resetForm }) => {
    if (serchQuery === '') return;
    query(serchQuery.trim().toLowerCase());
    resetForm();
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mr="auto"
      >
        <LinksRouter to="/">Back</LinksRouter>
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
        <Formik initialValues={{ serchQuery: '' }} onSubmit={handleSubmit}>
          <Form>
            <Input type="text" name="serchQuery" />
          </Form>
        </Formik>
        <Box>
          <MoviesRenderList>
            {results &&
              results.map(({ id, original_title, poster_path }) => (
                <MoviesItemCard key={id}>
                  <Link onClick={() => onClick(id)} to={`${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                      alt={original_title}
                    />
                    <p>{original_title}</p>
                  </Link>
                </MoviesItemCard>
              ))}
          </MoviesRenderList>
        </Box>
      </Box>
    </>
  );
};
