import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, LinksRouter } from 'CommonStyle/Common.styled';
import { HomeRenderList, HomeItemCard } from './Home.styled';
import { ListLinkStyled } from 'App.styled';
import { ApiServiseTrand } from '../Api/ServiceApi';

const IMG = 'https://dummyimage.com/400x600/000/0011ff&text=Not+find+photo';

export default function Home({ onClick }) {
  const [movies, setmovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    ApiServiseTrand().then(({ data: { results } }) => {
      setmovies(results);
    });
    return () => {
      setmovies([]);
    };
  }, []);

  return (
    <Box as="main" display="flex" flexDirection="column" gridGap="20px">
      <Box ml="auto">
        <ListLinkStyled>
          <LinksRouter to="/" state={{ from: location }}>
            Home
          </LinksRouter>
          <LinksRouter to="/movies" state={{ from: location }}>
            Movies
          </LinksRouter>
        </ListLinkStyled>
      </Box>
      <Box>
        <HomeRenderList>
          {movies.map(({ id, original_title, poster_path }) => (
            <HomeItemCard key={id}>
              <Link
                onClick={() => onClick(id)}
                to={`movies/${id}`}
                state={{ from: location }}
              >
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
            </HomeItemCard>
          ))}
        </HomeRenderList>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};
