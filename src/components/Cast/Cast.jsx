import { useEffect, useState } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { ApiServiseCastMovie } from '../Api/ServiceApi';
import { useParams } from 'react-router-dom';
const IMG = 'https://dummyimage.com/200x300/000/0011ff&text=Not+find+photo';

export default function Cast() {
  const [castMovie, setcastMovie] = useState([]);
  const hrefPageId = useParams('cast').id;

  useEffect(() => {
    if (hrefPageId === '') return;
    ApiServiseCastMovie('credits', hrefPageId).then(({ data }) => {
      setcastMovie(data);
    });
  }, [hrefPageId]);

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
