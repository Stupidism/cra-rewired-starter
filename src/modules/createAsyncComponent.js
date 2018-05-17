import Loadable from 'react-loadable';
import Loading from './Loading';

export default loader =>
  Loadable({
    loader,
    loading: Loading,
  });
