import { Box } from 'CommonStyle/Common.styled';

export const Reviews = ({ reviewsData: { results } }) => {
  console.log(results);
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
};
