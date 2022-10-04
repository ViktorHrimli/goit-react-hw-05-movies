import { Link } from 'react-router-dom';
import { Box, LinksRouter } from 'CommonStyle/Common.styled';
import { HomeRenderList, HomeItemCard } from './Home.styled';
import { ListLinkStyled } from 'App.styled';
const urlPage =
  'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png';
export const Home = ({ movie, onClick }) => {
  return (
    <Box as="main" display="flex" flexDirection="column" gridGap="20px">
      <Box ml="auto">
        <ListLinkStyled>
          <LinksRouter to="/">Home</LinksRouter>
          <LinksRouter to="/Movies">Movies</LinksRouter>
        </ListLinkStyled>
      </Box>
      <Box>
        <HomeRenderList>
          {movie.map(({ id, original_title, poster_path }) => (
            <HomeItemCard key={id}>
              <Link onClick={() => onClick(id)} to={`Movies/${id}`}>
                <img
                  src={
                    `https://image.tmdb.org/t/p/w400${poster_path}` || urlPage
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
};
