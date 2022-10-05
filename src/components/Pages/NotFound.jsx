import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  navigate('/', { replace: false });
  return <h1 color="red">Erorre</h1>;
};
