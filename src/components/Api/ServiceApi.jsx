import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const KEY = '4568c047ac29c58c34b8c5ba81189d61';
const URL = 'https://api.themoviedb.org/3/';

export const ApiServiseTrand = async () => {
  return await axios
    .get(`${URL}trending/movie/week?api_key=${KEY}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      toast.error(error.message);
    });
};

export const ApiServiseMovieDetails = async id => {
  return await axios
    .get(`${URL}movie/${id}?api_key=${KEY}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      toast.error(error.message);
    });
};

export const ApiServiseCastMovie = async (page, id) => {
  return await axios
    .get(`${URL}movie/${id}/${page}?api_key=${KEY}&language=en-US&page=1`)
    .then(res => {
      return res;
    })
    .catch(error => {
      toast.error(error.message);
    });
};

export const ApiServiceSerchMovie = async query => {
  if (query === '') {
    return;
  }
  return await axios
    .get(
      `${URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      toast.error(error.message);
    });
};

ApiServiseMovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
ApiServiseCastMovie.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
ApiServiceSerchMovie.propTypes = {
  query: PropTypes.string.isRequired,
};
