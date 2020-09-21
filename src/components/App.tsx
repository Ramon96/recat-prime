import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import GlobalStyle from 'styles';

const Prime = lazy(() => import('modules/Prime'));
const Favorites = lazy(() => import('modules/Favorites'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Prime} exact />
        <Route path="/favorites" render={() => <Favorites />} />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
