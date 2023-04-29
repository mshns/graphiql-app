import compose from 'compose-function';

import { withApollo } from './with-apollo';
import { withMUI } from './with-mui';
import { withStore } from './with-store';

export const withProviders = compose(withApollo, withMUI, withStore);
