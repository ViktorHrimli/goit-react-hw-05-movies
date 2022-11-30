import { HomeRenderList, HomeItemCard } from '../Pages/Home.styled';
import { Link, useLocation } from 'react-router-dom';
const IMG = 'https://dummyimage.com/400x600/000/0011ff&text=Not+find+photo';
const Gallery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <HomeRenderList>
        {movies.map(({ id, original_title, poster_path }) => (
          <HomeItemCard key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
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
    </>
  );
};

export default Gallery;
