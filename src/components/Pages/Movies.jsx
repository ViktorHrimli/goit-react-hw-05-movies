import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Box } from 'CommonStyle/Common.styled';

export const Movies = ({ query, movie: { results }, onClick }) => {
  const handleSubmit = ({ serchQuery }, { resetForm }) => {
    if (serchQuery === '') return;
    query(serchQuery.trim().toLowerCase());
    resetForm();
  };

  return (
    <main>
      <Link to="/">Back</Link>
      <h1>Movies</h1>
      <Formik initialValues={{ serchQuery: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="serchQuery" />
        </Form>
      </Formik>
      <Box>
        <ul>
          {results &&
            results.map(({ id, original_title, poster_path }) => (
              <li key={id}>
                <Link onClick={() => onClick(id)} to="MovieDetails">
                  <img
                    src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                    alt={original_title}
                  />
                  <p>{original_title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </Box>
    </main>
  );
};
