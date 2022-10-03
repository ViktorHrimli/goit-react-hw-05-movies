import { Box } from 'CommonStyle/Common.styled';

export const Cast = ({ castData: { cast } }) => {
  if (!cast) return;
  const castLength = cast.slice(0, 12);
  const urlPage =
    'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png';
  return (
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
                    `https://image.tmdb.org/t/p/w200${profile_path}` || urlPage
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
  );
};
