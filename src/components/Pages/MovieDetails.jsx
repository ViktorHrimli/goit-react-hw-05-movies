import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ApiServiseMovieDetails } from '../Api/ServiceApi';
import { Box, LinksRouterBack } from 'CommonStyle/Common.styled';
import { useQuery } from 'react-query';
import Moives from 'components/Item/ItemMovies';

export default function MovieDetails() {
  const [dataMovie, setDataMovie] = useState([]);
  const getIdParams = useParams('id');

  const { isLoading } = useQuery(
    ['get idMov', getIdParams.id],
    () => ApiServiseMovieDetails(getIdParams.id),
    {
      onSuccess: ({ data }) => {
        setDataMovie(data);
      },

      onError: error => {
        alert(error.message);
      },
    }
  );

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <Box mr="auto" display="flex" gridGap="20px">
        <LinksRouterBack to={backLinkHref}>Back</LinksRouterBack>
        <LinksRouterBack to="/">Home</LinksRouterBack>
      </Box>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={20}
      >
        {isLoading ? (
          <h1 style={{ color: 'red' }}>Isloading...</h1>
        ) : (
          <Moives dataMovie={dataMovie} />
        )}
        <Outlet />
      </Box>
    </>
  );
}
