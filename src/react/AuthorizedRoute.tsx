import { Route, RouteProps } from 'react-router-dom';

import useUser from './hooks/useUser';

interface Props extends RouteProps {}

function AuthorizedRoute({ path, component: Component, exact = false }: Props) {
  const { authorized } = useUser();

  if (!Component) {
    return null;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        if (authorized === true) {
          return <Component {...props} />;
        }

        if (authorized === false) {
          return <h1>권한 없음</h1>;
        }

        return null;
      }}
    />
  );
}

export default AuthorizedRoute;
