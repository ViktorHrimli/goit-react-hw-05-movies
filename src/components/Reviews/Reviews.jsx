import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ApiServiseCastMovie } from '../Api/ServiceApi';
import { Box } from 'CommonStyle/Common.styled';

export default function Reviews({ page, id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;
    ApiServiseCastMovie(page, id).then(({ data }) => {
      setReviews(data);
    });
  }, [id, page]);
  const { results } = reviews;
  return (
    <>
      {!results || results.length === 0 ? (
        <Box display="flex" color="black">
          <h2>Sorry, nothing was found (:</h2>
        </Box>
      ) : (
        <Box>
          <Box as="ul" display="flex" flexDirection="column" gridGap="10px">
            {results.map(({ author, content, id, url }) => {
              return (
                <li key={id}>
                  <p>
                    <b>{author}</b>
                  </p>
                  <p>{content}</p>
                  <p>
                    <b>{url}</b>
                  </p>
                  <p></p>
                </li>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
}

Reviews.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
