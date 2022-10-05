import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiServiseCastMovie } from '../Api/ServiceApi';
import { Box } from 'CommonStyle/Common.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const hrefPageId = useParams('cast').id;

  useEffect(() => {
    if (hrefPageId === '') return;
    ApiServiseCastMovie('reviews', hrefPageId).then(({ data }) => {
      setReviews(data);
    });
  }, [hrefPageId]);

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
