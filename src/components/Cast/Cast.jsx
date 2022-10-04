import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'CommonStyle/Common.styled';
import { ApiServiseCastMovie } from '../Api/ServiceApi';
const IMG = 'https://dummyimage.com/200x300/000/0011ff&text=Not+find+photo';

export default function Cast({ page, id }) {
  const [castMovie, setcastMovie] = useState([]);

  useEffect(() => {
    if (!id) return;
    ApiServiseCastMovie(page, id).then(({ data }) => {
      setcastMovie(data);
    });
  }, [id, page]);
  const { cast } = castMovie;

  if (!cast) return;
  const castLength = cast.slice(0, 12);
  return (
    <>
      {!cast || cast.length === 0 ? (
        <Box display="flex" color="black">
          <h2>Sorry, nothing was found (:</h2>
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" color="black">
          <Box
            as="ul"
            display="grid"
            gridTemplateColumns={['repeat(6, 200px)']}
            gridGap="50px"
          >
            {castLength.map(
              ({ character, id, name, profile_path, known_for_department }) => {
                return (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gridGap="5px"
                    key={id}
                  >
                    <img
                      src={
                        !profile_path
                          ? IMG
                          : `https://image.tmdb.org/t/p/w200${profile_path}`
                      }
                      alt={name}
                    />
                    <p>{name}</p>
                    <p>{character}</p>
                    <p>{known_for_department}</p>
                  </Box>
                );
              }
            )}
          </Box>
        </Box>
      )}
    </>
  );
}

Cast.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
