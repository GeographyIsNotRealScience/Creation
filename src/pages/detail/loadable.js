import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return <div>Loading...</div>
  }
});
const loadable = () => <LoadableComponent></LoadableComponent>;
export default loadable;
  