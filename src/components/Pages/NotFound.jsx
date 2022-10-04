import { LinksRouterBack } from 'CommonStyle/Common.styled';

export const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
      <LinksRouterBack to="/">Home Page</LinksRouterBack>;
    </main>
  );
};
