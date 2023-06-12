import compose from 'compose-function';

import { withMUI } from './with-mui';
import { withStore } from './with-store';

export const withProviders = compose(withMUI, withStore);
